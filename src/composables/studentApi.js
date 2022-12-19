import { ref } from 'vue'
import axios from 'axios'

export default function useStudent() {
    const url = "http://localhost:3000/students";
    const studentData = ref([])
    const error = ref(null)
    // Get All Student Data
    const getAllStudent = async () => {
        studentData.value = []
        error.value = null;
        try {
            const res = await axios(url)
            // console.log(res.data);
            studentData.value = res.data;
        } catch (err) {
            // console.log(err);
            error.value = err
        }
    }

    return{
        studentData,
        error,
        getAllStudent
    }
}