
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDocs, setDoc, getFirestore, getDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0Ztr9QrEBXVls2GRK7D7cxjk1V9hasdM",
  authDomain: "kanban-task-manager-885c5.firebaseapp.com",
  projectId: "kanban-task-manager-885c5",
  storageBucket: "kanban-task-manager-885c5.appspot.com",
  messagingSenderId: "427329642398",
  appId: "1:427329642398:web:af47cd4d067f5de93f008f",
  measurementId: "G-YP4BW4DEJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

const boardsCollectionRef = collection(db, "boards")


// API functions 

const getBoards = async() => {
  const snapshot = await getDocs(boardsCollectionRef)
  const docs = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return docs
}

const getBoard = async(docId) => {

  const docRef = doc(db, "boards", docId);
  const docSnap = await getDoc(docRef);

  return docSnap?.data() || "This board Does not exist."
}

const addBoard = async(board) => {
  console.log('adding....')
  const {name, columns, tasks,  id} = board
  await setDoc(doc(boardsCollectionRef, id), {
    name: name,
    columns: columns,
    tasks: tasks
  })

}

export { getBoards, getBoard, addBoard }
