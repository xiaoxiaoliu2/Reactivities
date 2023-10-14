import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
    activityStore: ActivityStore   // specify a property called activityStore, and it is a type of ActivityStore
}

export const store: Store = {
    activityStore: new ActivityStore()
}

export const StoreContext = createContext(store);

// create a simple react hook, allow us to use stores in components
export function useStore() {
    return useContext(StoreContext);
}

