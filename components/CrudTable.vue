
<template lang="">
<div class="add-btn-container">
    <input type="text" v-model="searchTerm" placeholder="Search...">
    <button @click="searchItems">Search</button>
    <nuxt-link :to="`/books/add`" class="custom-link">Add New</nuxt-link>
  </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <!-- Loop through paginated items -->
        <tr v-for="item in paginatedItems" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <!-- Edit and Delete buttons -->
            <nuxt-link :to="`/books/${item.id}`" class="custom-link">Edit</nuxt-link>
            <button @click="deleteItem(item.id)" class="delete-link">Delete</button>
          </td>
        </tr>
      </tbody>
      </table>
      <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span style="font-size: 16px;margin-right: 10px;">Page {{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
    
  </template>
  
<script>
export default {
    data() {
        return {
            items: [], // Your list of items
            currentPage: 1,
            itemsPerPage: 5,
            searchTerm: ''
        };
    },
    computed: {
        paginatedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.items.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
    },
    created() {
        this.fetchDataAll(); // Fetch initial data
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.fetchData();
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.fetchData();
            }
        },
        async fetchData() {
            try {
                const { data } = await useFetch(`http://localhost:8080/api/books/?page=${this.currentPage}`);
                this.items = data;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchDataAll() {
            try {
                const { data } = await useFetch(`http://localhost:8080/api/books/`);
                this.items = data;
                console.log(Math.ceil(this.items.length / this.itemsPerPage));
            } catch (error) {
                console.error(error);
            }
        },
        editItem(id) {
            this.$router.push(`/books/${id}`);
        },
        async deleteItem(id) {
            const deleteConfirmed = window.confirm('Are you sure you want to delete?');
            if (deleteConfirmed) {
                try {
                    await useFetch(`http://localhost:8080/api/books/delete/${id}`);
                    this.fetchData(this.currentPage, this.itemsPerPage);
                } catch (error) {
                    console.error(error);
                }
            }
        },
        async searchItems() {
            try {
                const { data } = await useFetch(`http://localhost:8080/api/books/?search=${this.searchTerm}`);
                this.items = data;
                this.paginatedItems();
            } catch (error) {
                console.error(error);
            }
        },
        // Other methods for adding, editing, or deleting items
    },
};
</script>
  
<style scoped>
/* Styles for the table */
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th,
td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: center;
}

th {
    background-color: #f4f4f4;
}

/* Styles for buttons and form */
button {
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-right: 10px;
}

button:hover {
    background-color: #0056b3;
}

.add-btn-container {
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
    margin-bottom: 40px;
}

.custom-link {
    display: inline-block;
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-right: 10px;
    text-decoration: none;
    /* Remove default underline */
}

.custom-link:hover {
    background-color: #0056b3;
}

.delete-link {
    display: inline-block;
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    border-radius: 3px;
    background-color: #dc3545;
    /* Background color for Delete button (red - danger) */
    color: #fff;
    /* Text color */
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
    /* Remove default underline */
}

.delete-link:hover {
    background-color: #c82333;
    /* Hover background color for Delete button (darker red) */
}

.search-input {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-bottom: 10px;
}
.pagination{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
  