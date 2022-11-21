import React from "react";

export const NewSend = () =>{
    return(
    <div className="container">
    <br /><h1 align="center">Nuevo Envio</h1><br />
    <form class="row g-3 needs-validation" novalidate>

    <div class="col-md-2">
      <label for="validationCustom02" class="form-label">Fecha</label>
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-1">
      <label for="validationCustom02" class="form-label">Hora</label>
      <input type="text" class="form-control" id="validationCustom02" value="13:00" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div className="col-md-4"></div>
    
    <div class="col-md-1">
      <label for="validationCustom02" class="form-label">Largo</label>
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-1">
      <label for="validationCustom02" class="form-label">Ancho</label>
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-1">
      <label for="validationCustom02" class="form-label">Alto</label>
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-1">
      <label for="validationCustom02" class="form-label">Peso (KG)</label>
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>


    <div class="col-md-4">
      <label for="validationCustom01" class="form-label">Dirección de Recogida</label>
      <input type="text" class="form-control" id="validationCustom01" value="" required placeholder=""/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Ciudad recogida</label>
        <select class="form-select" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option>...</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
    <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nombre destinatario</label>
        <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    <div class="col-md-4">
      <label for="validationCustom02" class="form-label">Dirección de Entrega</label>
      <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-3">
        <label for="validationCustom04" class="form-label">Ciudad entrega</label>
        <select class="form-select" id="validationCustom04" required>
          <option selected disabled value="">Choose...</option>
          <option>...</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid state.
        </div>
      </div>
    <div class="col-md-4">
      <label for="validationCustomUsername" class="form-label">Cedula</label>
      <div class="input-group has-validation">
        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
    <div className="col-md-12" align="center">
         <button type="submit" className="btn btn-primary">Crear envio</button>
         <button type="submit" className="btn btn-danger">Cancelar envio</button>
    </div>
  </form>

        </div>

    )
}