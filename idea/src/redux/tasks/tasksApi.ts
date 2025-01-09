import { tasksGroups } from "../../utils/Interfaces";

export function fetchTasksList(text: string) {
  let data: tasksGroups = {
    todo: [],
    in_progress: [],
    review: [],
    done: [],
    latestId: 0
  }
  try{
    const dataInitial = localStorage.getItem("data");
    if(dataInitial){
      const allItems = JSON.parse(dataInitial);
      data.latestId = allItems[allItems.length-1].id;
  
      // Filter and group tasks
      for(let item of allItems){
        if(item.text.toLowerCase().includes(text.toLowerCase())) {
          data[item.type].push(item);
        }
      }
    }
  }
  catch(err){
    console.error("Error fetching tasks:", err);
  }

  // Simulate async behavior
  return new Promise<any>((resolve) =>
    setTimeout(() => resolve(data), 200)
  );
}