import { useEffect, useState } from 'react'
import { ReactComponent as Location } from '../../assets/img/icons/location.svg'
import GoogleMapReact from 'google-map-react'
import { utilService } from 'services/util.service'
import { updateTask } from 'store/task.actions'
import { useSelector } from 'react-redux'

const defaultProps = {
    center: {
        lat: 32.0853,
        lng: 34.781769,
    },
    zoom: 11,
}

export function TaskLocation({
    task,
    boardId,
    groupId,
    location,
    setLocation,
    setIsLocOpen,
    isLocOpen,
}) {
    const [foundLocation, setFoundLocation] = useState(
        task?.locationTitle || 'No current location'
    )
    const [marker, setMarker] = useState(null)
    const { board } = useSelector((storeState) => storeState.boardModule)
    const debouncedLoc = utilService.debounce(handleLocationChange)


    async function handleLocationChange(event) {
        const searchValue = event.target.value
        if (searchValue.trim() === '') {
            setLocation(defaultProps.center)
            setFoundLocation('')
            return
        }
        const geocoder = new window.google.maps.Geocoder()
        try {
            await geocoder.geocode(
                { address: searchValue, language: 'en' },
                (results, status) => {
                    if (status === 'OK' && results.length > 0) {
                        const { lat, lng } = results[0].geometry.location
                        setLocation({ lat: lat(), lng: lng() })
                        setFoundLocation(results[0].formatted_address)
                    } else {
                        setFoundLocation('')
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async function handleSave() {
        const updatedTask = {
            ...task,
            location,
            locationTitle: foundLocation,
        }
        try {
            await updateTask(board, groupId, updatedTask)
            if (marker) {
                marker.setPosition(location)
                marker.getMap().panTo(location)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDelete() {
        const updatedTask = {
            ...task,
            location: null,
            locationTitle: null,
        }
        setFoundLocation('No current location')
        setLocation(null)
        try {
            await updateTask(board, groupId, updatedTask)
            if (marker) {
                marker.setPosition(null)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (task.location) {
            setLocation(task.location)
            setFoundLocation(task.locationTitle)
        } else {
            setLocation(defaultProps.center)
        }
    }, [])

    function onGoogleMapLoaded({ map, maps }) {
        let markerOptions
        if (task.location) {
            markerOptions = {
                position: task.location,
                map,
            }
        } else {
            markerOptions = {
                position: null,
                map,
            }
        }
        const newMarker = new maps.Marker(markerOptions)
        setMarker(newMarker)
        map.panTo(location)
    }

    function toggleShowLoc() {
        setIsLocOpen(!isLocOpen)
    }

    if (!task) return null

    return (
        <div className="location-container">
            <div className="description-title">
                <Location className="task-loaction-icon" />
                <h3>Location : <span>{foundLocation}</span></h3>
                <button onClick={toggleShowLoc} className="show-all">
                    {isLocOpen ? 'Hide location' : 'Show location'}
                </button>
            </div>
            {isLocOpen && (
                <div>
                    <input
                        className="loc-search"
                        type="text"
                        onChange={debouncedLoc}
                        placeholder="Enter location"
                    />
                    <h4 className="loc-title">{foundLocation}</h4>
                    <div
                        className="map"
                        style={{ height: '200px', width: '550px' }}
                    >
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: 'AIzaSyDCNE344_lv4Mvr0Ne4-Qqi_lA7vxB5NVU',
                            }}
                            center={location}
                            defaultZoom={defaultProps.zoom}
                            onGoogleApiLoaded={onGoogleMapLoaded}
                        ></GoogleMapReact>
                    </div>
                    <div className="location-control">
                        <button className="save" onClick={handleSave}>
                            Save
                        </button>
                        <button className="delete" onClick={handleDelete}>
                            Remove
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
