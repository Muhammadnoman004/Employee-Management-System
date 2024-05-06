import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../Configuration/Firebase.Config";
import { EmployeesEntity } from "../lib/firebase.entities";

//  Add-Employee Function    //

export const AddEmployee = async (data) => {
    try {
        const docRef = await addDoc(collection(db, EmployeesEntity), {
            ...data,
            subordinates: []
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

//  GetData Function    //

export const getData = (callback) => {
    try {
        const q = collection(db, EmployeesEntity);

        return onSnapshot(q, (snapshot) => {
            const EmployeeList = snapshot.docs.map((doc) => {
                return {
                    ...doc.data(), id: doc.id
                }
            });
            callback(EmployeeList);
        });

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}