<template>
    <div class="container">
        <h1>Listado de Municipios |
            <button @click="newMunicipio()" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(municipio, index) in municipios" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ municipio.muni_codi }}</td>
                    <td>{{ municipio.muni_nomb }}</td>
                    <td>
                        <button @click="deleteMunicipio(municipio.muni_codi)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editMunicipio(municipio.muni_codi)" class="btn btn-warning mx-2">
                            <font-awesome-icon icon="pencil" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'Municipios',
    data() {
        return {
            municipios: [],
        };
    },
    methods: {
        deleteMunicipio(codigo) {
            Swal.fire({
                title: `¿Quieres eliminar el municipio con ID ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/municipios/${codigo}`).then((response) => {
                        if (response.data.success) {
                            Swal.fire('¡Eliminado!', '', 'success');
                            this.municipios = response.data.municipios;
                        }
                    });
                }
            });
        },
        editMunicipio(id) {
            this.$router.push({ name: 'EditarMunicipio', params: { id } });
        },
        newMunicipio() {
            this.$router.push({ name: 'NuevoMunicipio' });
        },
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/municipios').then((response) => {
            this.municipios = response.data.municipios;
        });
    },
};
</script>