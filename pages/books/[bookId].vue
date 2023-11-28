<template>
  <div class="edit-container">
    <h2>Edit Book</h2>
    <form @submit.prevent="updateItem">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="editedItem.name">
        <span v-if="errorChecked && !editedItem.name" class="error-message">Please enter a name</span>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <input type="text" id="description" v-model="editedItem.description">
        <span v-if="errorChecked && !editedItem.description" class="error-message">Please enter a description</span>
      </div>
      <div class="form-group">
        <button type="submit">Update</button>
        <NuxtLink to="/books" class="cancel-link">Cancel</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      editedItem: {
        id: null,
        name: '',
        description: ''
      },
      errorChecked:false
    };
  },
  created() {
    const { bookId } = useRoute().params;
    this.fetchBookDetails(bookId);
  },
  methods: {
    fetchBookDetails(bookId) {
      axios.get(`http://localhost:8080/api/books/${bookId}`)
        .then(response => {
          this.editedItem = response.data;
          this.editedItem.id = response.data.id;
        })
        .catch(error => {
          console.error('Error fetching book details:', error);
        });
    },
    updateItem() {
      if (!this.editedItem.name || !this.editedItem.description) {
        this.errorChecked = true;
        console.error('Please fill in all fields');
      } else {
        this.errorChecked = false;
        axios.post(`http://localhost:8080/api/books/update`, this.editedItem)
          .then(response => {
            this.$router.push('/books');
          })
          .catch(error => {
            console.error('Error updating book:', error);
          });
      }
    }
  }
};
</script>

<style scoped>
.edit-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

a {
  text-decoration: none;
  color: #333;
}
.cancel-link {
  display: inline-block;
  margin-left: 8px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  background-color: #dc3545; /* Change background color to red (#dc3545) */
  color: #fff; /* Text color */
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none; /* Remove default underline */
}

.cancel-link:hover {
  background-color: #c82333; /* Change hover background color to a darker red (#c82333) */
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
