import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  // Add your Firebase config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addService = async (serviceData) => {
  try {
    await addDoc(collection(db, 'services'), serviceData);
  } catch (error) {
    console.error('Error adding service: ', error);
  }
};

export const addProject = async (projectData) => {
  try {
    await addDoc(collection(db, 'projects'), projectData);
  } catch (error) {
    console.error('Error adding project: ', error);
  }
};

export const getServices = async () => {
  try {
    const q = query(collection(db, 'services'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting services: ', error);
    return [];
  }
};

export const getProjects = async () => {
  try {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting projects: ', error);
    return [];
  }
};
