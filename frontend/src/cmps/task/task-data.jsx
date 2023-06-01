import { DatePreview } from "./date-preview.jsx";
import { LabelsPreview } from "./labels-preview.jsx";
import { MembersPreview } from "./members-preview.jsx";


export function TaskData({task}){

    return (
        <div className="data-preview">
          <div className="data-item">
            <MembersPreview task={task} />
          </div>
          <div className="data-item">
            <LabelsPreview task={task} />
          </div>
          <div className="data-item">
            <DatePreview task={task} />
          </div>
        </div>
      )
    }

