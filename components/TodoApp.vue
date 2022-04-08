<template>
  <div class="text-white dark:text-white">
    <div class="container my-5">
      <h2 class="text-center">VUE 3 ToDo App With Rest Api</h2>
      <div class="row d-flex justify-content-center">
        <div class="col-xs-12 col-lg-6 my-3">
          <div class="form-group mb-3">
            <label for="todo" class="form-label">Add ToDo</label>
            <div class="row">
              <div class="col-10">
                <input
                  v-model="todo"
                  type="text"
                  class="form-control text-black"
                  name="todo"
                  id="todo"
                  placeholder="Enter New Todo"
                  v-bind:class="{
                    'is-invalid': input_errors.length > 0,
                    'is-valid': input_errors.length == 0 && todo != '',
                  }"
                />
                <div class="invalid-feedback">
                  <span :key="key" v-for="(error, key) in input_errors">{{
                    error
                  }}</span>
                </div>
              </div>
              <div class="col-2 d-grid gap-2">
                <button class="btn btn-primary btn-s float-end" @click="save">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div class="form-group"></div>
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-3" v-if="ToDos.length">
        <div class="col-md-6">
          <h5 class="mb-3">ToDo List</h5>
          <div style="list-style-type: none">
            <li
              v-for="(todo, index) in ToDos"
              v-bind:key="index"
              class="row"
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 24px;
                border-radius: 6px;
                margin-bottom: 12px;
                border: 2px solid hsla(0, 0%, 0%, 0.35);
              "
            >
              <div class="col-8">
                <span
                  v-bind:style="
                    todo.done ? 'text-decoration:line-through;' : ''
                  "
                  >{{ todo.todo }}</span
                >
              </div>
              <div class="col-2 d-flex justify-content-center">
                <span
                  class="form-check form-switch"
                  @click="done_todo(todo,index)"
                  style="margin-left: 20px"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    data-onstyle="#1f2023"
                    :checked="todo.done"
                  />
                </span>
              </div>
              <div class="col-2 d-flex justify-content-center">
                <button
                  class="btn btn-danger btn-sm"
                  @click="delete_todo(index)"
                >
                  Delete
                </button>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
      ToDos: [],
      errors: [],
      newTodo: {
        todo: "",
        done: false,
      },
      responseData: null,
      input_errors: [],
    };
  },
  mounted() {
    !localStorage.getItem("todos") ? localStorage.setItem("todos","[]") : ""; 
    //localStorage.setItem("todos", "[]")
    this.getTodos();
  },
  methods: {
    getTodos() {
      try {
        //const response = await this.$axios.get("/todos");
        this.ToDos = JSON.parse(localStorage.getItem("todos"));
      } catch (error) {
        this.errors.push(error);
      }
    },
    save() {
      if (this.input_errors.length > 0 || this.todo == "") {
        if (this.todo == "" && this.input_errors.length == 0)
          this.input_errors.push("ToDo field cannot be left blank");
        this.input_errors.forEach((value) => {
          //this.$notify(value);
        });
      } else {
        try {
          this.newTodo.todo = this.todo;
          this.ToDos.push(this.newTodo)
          localStorage.setItem("todos", JSON.stringify(this.ToDos));
          this.getTodos();
          //const response = await this.$axios.post("/todos", this.newTodo);
          //this.responseData = response.data;
        } catch (error) {
          this.errors.push(error);
        }
        //this.getTodos();
        //this.$notify("Added Succesfully");
        this.todo = "";
      }
    },
    async delete_todo(index) {
      //console.log(index)
      this.ToDos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.ToDos));
      this.getTodos();
      /*try {
        const response = await this.$axios.delete("/todos/" + index);
        this.responseData = response.data;
      } catch (error) {
        this.errors.push(error);
      }*/
      this.getTodos();
      //this.$notify("Deleted Succesfully");
    },
    async done_todo(todo,index) {
      /*try {
        const response = await this.$axios.put("/todos/" + todo.id, {
          todo: todo.todo,
          done: !todo.done,
        });
        this.responseData = response.data;
      } catch (error) {
        this.errors.push(error);
      }*/
      console.log(todo)
      console.log(index)
      let modifiedTodo = {
        todo: todo.todo,
        done: !todo.done
      }
      this.ToDos[index] = modifiedTodo;
      localStorage.setItem("todos", JSON.stringify(this.ToDos))
      this.getTodos();
      //this.$notify("Updated Succesfully");
    },
  },
  watch: {
    todo(val) {
      this.input_errors = [];
      if (val == "") {
        this.input_errors.push("ToDo field cannot be left blank");
        return;
      }
      if (val.length < 3 || val.length > 40) {
        this.input_errors.push(
          "ToDo field be Minimum 6, Maximum 25 characters"
        );
        return;
      }
    },
  },
};
</script>
