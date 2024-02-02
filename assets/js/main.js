$(function() {
    function fetchJSONData() {
        fetch("./assets/js/data/sos.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error
                        (`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {           
                //Select dinamico para sujetos obligados
                $.each(data, function (key, value) {
                    $(".sujetos-obligados-select").append("<option value='" + value.idSujetoObligado + "'>" + value.title + "</option>");
                });
            })
            .catch((error) => 
                console.error("Unable to fetch data:", error));
    }

    function saveInfo(){
        $.ajax({
            type:"POST",
            url:"api/saveData",
            data:{
                "so":$('#sujeto_obligado').val(),
                "unidad":$('#unidad').val(),
                "titular":$('#titular').val(),
                "fecha":$('#fecha').val(),
                "tratamiento":$('#tratamiento').val(),
                "fundamento":$('#fundamento').val(),
                "atribuciones":$('#atribuciones').val(),
                "elaboro":$('#elaboro').val(),
                "reviso":$('#reviso').val(),
                "autorizo":$('#autorizo').val(),
                "medios":$('#medios').val(),
                "fuenteAcceso":$('#fuenteAcceso').val(),
                "medioObtencion":$('#medioObtencion').val(),
                "nombreTercero":$('#nombreTercero').val(),
                "finalidadesTransferencia":$('#finalidadesTransferencia').val(),
                "indicarDatos":$('#indicarDatos').val(),
                "categoriaDato":$('#categoriaDato').val(),
                "otroCategoriaDato":$('#otroCategoriaDato').val(),
                "datoSensible":$('#datoSensible').val(),
                "clasificacionDatoPersonal":$('#clasificacionDatoPersonal').val(),
                "realizanTransferencias":$('#realizanTransferencias').val(),
                "terceroDatosPersonales":$('#terceroDatosPersonales').val(),
                "finalidadesTransferenciaDP":$('#finalidadesTransferenciaDP').val(),
                "subscripcionTransferencia":$('#subscripcionTransferencia').val(),
                "consentimientoTransferencia":$('#consentimientoTransferencia').val(),
                "supuestosArticulos":$('#supuestosArticulos').val(),
                "difusionDP":$('#difusionDP').val(),
                "fundamentoDifusionDP":$('#fundamentoDifusionDP').val(),
                "encargadosTratamiento":$('#encargadosTratamiento').val(),
                "numIdentificacion":$('#numIdentificacion').val(),
                "baseDatos":$('#baseDatos').val(),
                "ubicacionBaseDatos":$('#ubicacionBaseDatos').val(),
                "otroBaseDatos":$('#otroBaseDatos').val(),
                "finalidadesTratamiento":$('#finalidadesTratamiento').val(),
                "escolaridad":$('#escolaridad').val(),
                "consentimientoTitular":$('#consentimientoTitular').val(),
                "supuestoConsentimiento":$('#supuestoConsensimiento').val(),
                "tipoConsentimientoTitular":$('#tipoConsentimientoTitular').val(),
                "servidoresPublicosBaseDatos":$('#servidoresPublicosBaseDatos').val(),
                "areaAdministrativaPuesto":$('#areaAdministrativaPuesto').val(),
                "finesAcceso":$('#finesAcceso').val(),
                "claveTratamiento":$('#claveTratamiento').val(),
                "claveSerieTratamiento":$('#claveSerieTratamiento').val(),
                "clavesubSerieTratamiento":$('#clavesubSerieTratamiento').val(),
                "plazoConservacion":$('#plazoConservacion').val(),
                "periodoBloqueo":$('#periodoBloqueo').val(),
                "periodoBaja":$('#periodoBaja').val(),
                "formatoElectronico":$('#formatoElectronico').val(),
                "observaciones":$('#observaciones').val()
            },success:function(){
                console.log("success");
            },error:function(){
                console.log("error");
            }
        })
    }

    $('.obtencionMedios').select2();

    fetchJSONData();
  
});