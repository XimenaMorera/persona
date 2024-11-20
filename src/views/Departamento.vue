<template>
    <div class="container">
      <h1 class="text-start">Listado Departamento |
        <button @click="newDepartamento()"
          class="btn btn-success mx-2">
          <font-awesome-icon icon="plus" />
        </button>
      </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Municipality</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(departamento,index) in departamentos" :key="index">
            <th scope="row">{{index+1}}</th>
            <td>{{departamento.comu_codi}}</td>
            <td>{{departamento.comu_nomb}}</td>
            <td>{{departamento.muni_nomb}}</td>
            <td>
              <button @click="deleteDepartamento(departamento.comu_codi)"
                class="btn btn-danger mx-2">
                <font-awesome-icon icon="trash" />
              </button>
              <button @click="editDepartamento(departamento.comu_codi)"
                class="btn btn-warning mx-2">
                <font-awesome-icon icon="pencil" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>