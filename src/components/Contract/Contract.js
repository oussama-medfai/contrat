import React, { useState } from "react";
import { jsPDF } from "jspdf";
import style from "./Contract.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Input } from "reactstrap";
// Create styles

// Create Document Component

const Contract = () => {
  const [state, setState] = useState({
    name: "",
    lastname: "",
    naiss: undefined,
    lieunais: "",
    adresse: "",
    telephone: "",
    profession: "",
    CIN: 0,
    CINdiliv: undefined,
    CINlieu: "",
    permi: "",
    permidate: undefined,
    permilieu: "",
    name1: "",
    lastname1: "",
    naiss1: undefined,
    lieunais1: "",
    adresse1: "",
    telephone1: "",
    profession1: "",
    CIN1: 0,
    CINdiliv1: undefined,
    CINlieu1: "",
    permi1: "",
    permidate1: undefined,
    permilieu1: "",
    marque: "",
    matricule: 0,
    TU: 0,
    date_dep: undefined,
    lieu_dep: "",
    time_dep: "",
    date_ret: undefined,
    lieu_ret: "",
    time_ret: "",
    date_pro: undefined,
    lieu_pro: "",
    time_pro: "",
    km_depart: 0,
    km_ret: 0,
    km_par: 0,
    km_fac: 0,
    caution: "",
    name_chau: "",
    CIN_chau: "",
    permi_chau: "",
    nom_client: "",
    mat_client: "",
    duree_client: "",
    PP_client: "",
    charge_client: "",
    HT_client: "",
    TVA_client: "",
    timbre_client: "",
    totale: "",
    cheque: null,
    cart: null,
    espece: null
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setState({ ...state, [evt.target.name]: evt.target.value });
  };
  const pdfToFormat = () => {
    var doc = new jsPDF("p", "cm");
    doc.text(state.name, 2.5, 6);
    doc.text(state.lastname, 3, 6.5);
    if (state.naiss !== undefined) {
      doc.text(state.naiss, 2.5, 7);
    }

    doc.text(state.lieunais, 2, 7.5);
    doc.text(state.adresse, 3, 8);
    doc.text(state.telephone, 2.5, 8.5);
    doc.text(state.profession, 3.5, 9);
    if (state.CIN !== 0) {
      doc.text(state.CIN, 5, 9.5);
    }
    if (state.CINdiliv !== undefined) {
      doc.text(state.CINdiliv, 3.5, 10);
    }
    doc.text(state.CINlieu, 2, 10.5);
    doc.text(state.permi, 5, 11);
    if (state.permidate !== undefined) {
      doc.text(state.permidate, 3.5, 11.5);
    }
    doc.text(state.permilieu, 2, 12);
    doc.text(state.name1, 12.5, 6);
    doc.text(state.lastname1, 13, 6.5);
    if (state.naiss1 !== undefined) {
      doc.text(state.naiss1, 12.5, 7);
    }
    doc.text(state.lieunais1, 12, 7.5);
    doc.text(state.adresse1, 13, 8);
    doc.text(state.telephone1, 12.5, 8.5);
    doc.text(state.profession1, 13.5, 9);
    if (state.CIN1 !== 0) {
      doc.text(state.CIN1, 15, 9.5);
    }
    if (state.CINdiliv1 !== undefined) {
      doc.text(state.CINdiliv1, 13.2, 10);
    }
    doc.text(state.CINlieu1, 12, 10.5);
    doc.text(state.permi1, 15, 11);
    if (state.permidate1 !== undefined) {
      doc.text(state.permidate1, 13.5, 11.5);
    }
    doc.text(state.permilieu1, 12, 12);
    doc.text(state.marque, 3, 14);
    if (state.matricule !== 0) {
      doc.text(state.matricule, 11.5, 14);
    }
    if (state.TU !== 0) {
      doc.text(state.TU, 17.5, 14);
    }
    doc.setFontSize(9);
    if (state.date_dep !== undefined) {
      doc.text(state.date_dep, 4, 14.7);
    }
    doc.text(state.lieu_dep, 4, 15.1);
    doc.text(state.time_dep, 4, 15.5);
    if (state.date_ret !== undefined) {
      doc.text(state.date_ret, 10, 14.7);
    }
    doc.text(state.lieu_ret, 10, 15.1);
    doc.text(state.time_ret, 10, 15.5);
    if (state.date_pro !== undefined) {
      doc.text(state.date_pro, 16.8, 14.7);
    }
    doc.text(state.lieu_pro, 16.8, 15.1);
    doc.text(state.time_pro, 16.8, 15.5);

    if (state.km_depart !== 0) {
      doc.text(state.km_depart, 3, 17.4);
    }
    if (state.km_ret !== 0) {
      doc.text(state.km_ret, 6.5, 17.4);
    }
    if (state.km_par !== 0) {
      doc.text(state.km_par, 12.3, 17.4);
    }
    if (state.km_fac !== 0) {
      doc.text(state.km_fac, 17.5, 17.4);
    }
    doc.text(state.caution, 3, 19.3);
    doc.text(state.name_chau, 4, 20.9);
    doc.text(state.CIN_chau, 4, 21.4);
    doc.text(state.permi_chau, 4.5, 21.9);
    doc.text(state.nom_client, 14.5, 18.9);
    doc.text(state.mat_client, 14.5, 19.4);
    doc.text(state.duree_client, 14.5, 19.9);
    doc.text(state.PP_client, 14.5, 20.4);
    doc.text(state.charge_client, 14.5, 21);
    doc.text(state.HT_client, 14.5, 21.6);
    doc.text(state.TVA_client, 14.5, 22.2);
    doc.text(state.timbre_client, 14.5, 22.7);
    doc.text(state.totale, 14.5, 23.6);
    if(state.cheque){
       doc.text('X',3.1,18.7)
    }
    if(state.cart){
    doc.text('X',6.8,18.7)}
    if(state.cheque){
    doc.text('X',9.4,18.7)}
    doc.output("dataurlnewwindow");
  };
  return (
    <div>
      <h1>Contract printer</h1>

      <Container>
        <Row>
          <Col>
            Nom:
            <br />
            <input type="text" name="name" onChange={handleSubmit} />
          </Col>
          <Col>
            <label>
              Nom:
              <br />
              <input type="text" name="name1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              Prénom:
              <br />
              <input type="text" name="lastname" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            <label>
              Prenom:
              <br />
              <input type="text" name="lastname1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              date naissance:
              <br />
              <input type="date" name="naiss" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            <label>
              date naissance:
              <br />
              <input type="date" name="naiss1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              lieu de naissance:
              <br />
              <input type="text" name="lieunais" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            <label>
              lieu de naissance:
              <br />
              <input type="text" name="lieunais1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <label>
              adresse:
              <br />
              <input type="text" name="adresse" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            {" "}
            <label>
              adresse:
              <br />
              <input type="text" name="adresse1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <label>
              telephone:
              <br />
              <input type="number" name="telephone" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            {" "}
            <label>
              telephone:
              <br />
              <input type="number" name="telephone1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              profession:
              <br />
              <input type="text" name="profession" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            <label>
              profession:
              <br />
              <input type="text" name="profession1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>
              CIN:
              <br />
              <input type="number" name="CIN" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            <label>
              CIN:
              <br />
              <input type="number" name="CIN1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <label>
              Délivrée le:
              <br />
              <input type="date" name="CINdiliv" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            {" "}
            <label>
              Délivrée le:
              <br />
              <input type="date" name="CINdiliv1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <label>
              lieu:
              <br />
              <input type="text" name="CINlieu" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            {" "}
            <label>
              lieu:
              <br />
              <input type="text" name="CINlieu1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <label>
              permis de conduire N:
              <br />
              <input type="text" name="permi" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            <label>
              permis de conduire N:
              <br />
              <input type="text" name="permi1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <label>
              delivre le:
              <br />
              <input type="date" name="permidate" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            {" "}
            <label>
              delivre le:
              <br />
              <input type="date" name="permidate1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <label>
              lieu:
              <br />
              <input type="text" name="permilieu" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            {" "}
            <label>
              lieu:
              <br />
              <input type="text" name="permilieu1" onChange={handleSubmit} />
            </label>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <label>
              véhicule& marque:
              <Input type="text" name="marque" onChange={handleSubmit} />
            </label>
          </Col>
          <Col>
            <label>
              Matricule:
              <Input
                type="number"
                bsSize="sm"
                name="matricule"
                onChange={handleSubmit}
              />
            </label>
            <label>
              <Input
                type="number"
                bsSize="sm"
                name="TU"
                onChange={handleSubmit}
                placeholder="Tunis"
              />
            </label>
          </Col>
        </Row>
      </Container>
      <div className={style.containers}>
        <div className={style.ones}>
          <label>
            date de depart:
            <br />
            <input type="date" name="date_dep" onChange={handleSubmit} />
          </label>{" "}
          <br />
          <label>
            lieu:
            <br />
            <input type="text" name="lieu_dep" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            Heure:
            <br />
            <input type="time" name="time_dep" onChange={handleSubmit} />
          </label>
        </div>
        <div className={style.twos}>
          {" "}
          <label>
            date de retour:
            <br />
            <input type="date" name="date_ret" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            lieu :<br />
            <input type="text" name="lieu_ret" onChange={handleSubmit} />
          </label>{" "}
          <br />
          <label>
            Heure:
            <br />
            <input type="time" name="time_ret" onChange={handleSubmit} />
          </label>
        </div>
        <div className={style.tres}>
          <label>
            prolongation:
            <br />
            <input type="date" name="date_pro" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            lieu :<br />
            <input type="text" name="lieu_pro" onChange={handleSubmit} />
          </label>{" "}
          <br />
          <label>
            Heure:
            <br />
            <input type="time" name="time_pro" onChange={handleSubmit} />
          </label>
        </div>
      </div>
      <div>
        <label>
          Km départ:
          <input type="number" name="km_depart" onChange={handleSubmit} />
        </label>
        <label>
          Km Retour:
          <input type="number" name="km_ret" onChange={handleSubmit} />
        </label>
        <label>
          Km parcouru:
          <input type="number" name="km_par" onChange={handleSubmit} />
        </label>
        <label>
          Km Facturés:
          <input type="number" name="km_fac" onChange={handleSubmit} />
        </label>
      </div>
      <div className={style.container}>
        <div className={style.one}>
          <label>
            Chéque:
            <input type="checkbox" name="cheque" onChange={handleSubmit} />
          </label>
          <label>
            Carte de crédit:
            <input type="checkbox" name="cart" onChange={handleSubmit} />
          </label>
          <label>
            Espéce:
            <input type="checkbox" name="espece" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            montant de cautionnement:
            <input type="text" name="caution" onChange={handleSubmit} />
          </label>
          <hr />
          <br />
          <label>
            Nom&Prénom:
            <br />
            <input type="text" name="name_chau" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            Piece d'Identité:
            <br />
            <input type="text" name="CIN_chau" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            permis de Conduire:
            <br />
            <input type="text" name="permi_chau" onChange={handleSubmit} />
          </label>
        </div>
        <div className={style.two}>
          <label>
            Nom du client:
            <br />
            <input type="text" name="nom_client" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            Matriculation Fiscales:
            <br />
            <input type="text" name="mat_client" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            Durée de Location:
            <br />
            <input type="text" name="duree_client" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            Prix par Jour:
            <br />
            <input type="text" name="PP_client" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            Autres Charges:
            <br />
            <input type="text" name="charge_client" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            Total H.T.:
            <br />
            <input type="text" name="HT_client" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            TVA 19%:
            <br />
            <input type="text" name="TVA_client" onChange={handleSubmit} />
          </label>
          <br />
          <label>
            Droit de Timbre:
            <br />
            <input type="text" name="timbre_client" onChange={handleSubmit} />
          </label>
          <hr />
          <label>
            Total Facture:
            <br />
            <input type="text" name="totale" onChange={handleSubmit} />
          </label>
        </div>
      </div>
      <button onClick={() => pdfToFormat()}>generate pdf</button>
    </div>
  );
};

export default Contract;
