import { collection, addDoc } from "firebase/firestore";
import { db } from "../Configuration/Firebase.Config";
import { EmployeesEntity } from "../lib/firebase.entities";

export const AddEmployee = async (data) => {
    try {
        const docRef = await addDoc(collection(db, EmployeesEntity), {
            name: data.name,
            email: data.email,
            position: data.position,
            supervisor: []
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}