import { fetchPlumbers, fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchRequests().then( () => 
    fetchPlumbers().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

