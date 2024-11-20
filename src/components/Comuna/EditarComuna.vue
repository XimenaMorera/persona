<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold">Editar</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Comuna
        </div>
        <div class="card-body">
          <form @submit.prevent="updateComuna">
            <div class="row mb-3">
              <label for="comu_codi" class="form-label">Código</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="comu_codi" placeholder="Código Comuna" disabled
                  v-model="comuna.comu_codi"
                >
              </div>
            </div>
  
            <div class="row mb-3">
              <label for="comu_nomb" class="form-label">Nombre : </label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                <input type="text" class="form-control" id="comu_nomb" placeholder="Código comuna"
                  v-model="comuna.comu_nomb"
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>