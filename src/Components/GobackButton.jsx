import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

const GobackButton = () => {
  return (
    <sectiob>
        <div>
          <Link to="/profile">
            <button className="flex items-center text-lg">
              <ChevronLeft className="size-5" /> back
            </button>
          </Link>
        </div>
    </sectiob>
  )
}

export default GobackButton