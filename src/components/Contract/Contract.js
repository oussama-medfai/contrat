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
    totale: ""
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setState({ ...state, [evt.target.name]: evt.target.value });
  };
  const pdfToFormat = () => {
    var doc = new jsPDF("p", "cm", "a4");
    doc.text(state.name, 1, 1);
    doc.text(state.lastname, 2, 1);
    if (state.naiss !== undefined) {
      doc.text(state.naiss, 3, 1);
    }

    doc.text(state.lieunais, 4, 1);
    doc.text(state.adresse, 5, 1);
    doc.text(state.telephone, 6, 1);
    doc.text(state.profession, 7, 1);
    if (state.CIN !== 0) {
      doc.text(state.CIN, 8, 1);
    }
    if (state.CINdiliv !== undefined) {
      doc.text(state.CINdiliv, 9, 1);
    }
    doc.text(state.CINlieu, 10, 1);
    doc.text(state.permi, 11, 1);
    if (state.permidate !== undefined) {
      doc.text(state.permidate, 12, 1);
    }
    doc.text(state.permilieu, 13, 1);
    doc.text(state.name1, 13, 2);
    doc.text(state.lastname1, 13, 3);
    if (state.naiss1 !== undefined) {
      doc.text(state.naiss1, 13, 4);
    }
    doc.text(state.lieunais1, 13, 5);
    doc.text(state.adresse1, 13, 6);
    doc.text(state.telephone1, 13, 7);
    doc.text(state.profession1, 13, 8);
    if (state.CIN1 !== 0) {
      doc.text(state.CIN1, 13, 9);
    }
    if (state.CINdiliv1 !== undefined) {
      doc.text(state.CINdiliv1, 13, 10);
    }
    doc.text(state.CINlieu1, 13, 11);
    doc.text(state.permi1, 13, 12);
    if (state.permidate1 !== undefined) {
      doc.text(state.permidate1, 13, 13);
    }
    doc.text(state.permilieu1, 13, 13);
    doc.text(state.marque, 20, 140);
    if (state.matricule !== 0) {
      doc.text(state.matricule, 120, 140);
    }
    if (state.TU !== 0) {
      doc.text(state.TU, 180, 140);
    }
    doc.setFontSize(9);
    if (state.date_dep !== undefined) {
      doc.text(state.date_dep, 35, 150);
    }
    doc.text(state.lieu_dep, 35, 153);
    doc.text(state.time_dep, 35, 156);
    if (state.date_ret !== undefined) {
      doc.text(state.date_ret, 80, 150);
    }
    doc.text(state.lieu_ret, 80, 153);
    doc.text(state.time_ret, 80, 156);
    if (state.date_pro !== undefined) {
      doc.text(state.date_pro, 120, 150);
    }
    doc.text(state.lieu_pro, 120, 153);
    doc.text(state.time_pro, 120, 156);

    if (state.km_depart !== 0) {
      doc.text(state.km_depart, 35, 180);
    }
    if (state.km_ret !== 0) {
      doc.text(state.km_ret, 75, 180);
    }
    if (state.km_par !== 0) {
      doc.text(state.km_par, 125, 180);
    }
    if (state.km_fac !== 0) {
      doc.text(state.km_fac, 175, 180);
    }
    doc.text(state.caution, 30, 200);
    doc.text(state.name_chau, 40, 210);
    doc.text(state.CIN_chau, 40, 214);
    doc.text(state.permi_chau, 44, 218);
    doc.text(state.nom_client, 140, 195);
    doc.text(state.mat_client, 140, 200);
    doc.text(state.duree_client, 140, 205);
    doc.text(state.PP_client, 140, 210);
    doc.text(state.charge_client, 140, 215);
    doc.text(state.HT_client, 140, 220);
    doc.text(state.TVA_client, 140, 225);
    doc.text(state.timbre_client, 140, 230);
    doc.text(state.totale, 140, 235);
    doc.output("dataurlnewwindow");
  };
  return (
    <div>
      <h1>zzzzzzzzzzzzzzzz</h1>

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
            <input type="checkbox" />
          </label>
          <label>
            Carte de crédit:
            <input type="checkbox" />
          </label>
          <label>
            Espéce:
            <input type="checkbox" />
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
