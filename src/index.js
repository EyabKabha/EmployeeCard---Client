import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HMCYes: false,
      marriedStatus: false,
      incomeStatus: false,
      checked: false,
      inputsKids: [],
    }
  }

  onChangeHandlerHMC = (event) => {
    var typeHMC = event.target.value;
    if (typeHMC === 'HMCYes') {
      this.setState({ HMCYes: true })
    } else {
      this.setState({ HMCYes: false })
    }
  }

  statusEmploye = (event) => {
    var statusIsMarried = event.target.value;
    if (statusIsMarried === 'Married') {
      this.setState({ marriedStatus: true })
    } else {
      this.setState({ marriedStatus: false })
    }
  }

  onClickMoreIncome = (event) => {
    var statusIncome = event.target.value;
    console.log('in yes')
    if (statusIncome === 'yesIncomeMore') {
      console.log('in yes')
      this.setState({ incomeStatus: true })
    } else {
      this.setState({ incomeStatus: false })
    }

  }
  checkBoxMoreIncome = (event) => {

    if (event.target.value === 'checkBoxAnotherPlace') {
      this.setState({ checked: !this.state.checked })
    }
  }

  addInput = () => {
    this.setState(prev => ({ inputsKids: [...prev.inputsKids, ''] }))

  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <h1 className="mr-3">כרטיס עובד</h1>
        </div>
        <div className="row">
          <p className="mr-3">ובקשה להקלה ולתיאום מס על ידי המעביד</p>
        </div>
        <div className="row text-right">
          <p className="mr-3">
            לפי תקנות מס הכנסה (ניכוי ממשכורת ומשכר עבודה), התשנ"ג -
            1993
          </p>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <h4 className="text-center">שנת המס'</h4>
                    <input type="text" className="form-control text-center mb-2" aria-label="Username"
                      aria-describedby="basic-addon1" disabled="true" value="2020" />
                  </div>
                  <div className="col-md-4"></div>
                </div>
                <p className="card-text text-center mb-2">
                  טופס זה ימולא על-ידי כל עובד עם תחילת עבודתו,
                  וכן בתחילת כל שנת מס (אא"כ המנהל אישר אחרת).
                  הטופס מהווה אסמכתא למעביד למתן הקלות במס ולעריכת
                  תיאומי מס בחישוב משכורת העובד. אם חל שינוי
                  בפרטים - יש להצהיר על כך תוך שבוע ימים.
                      </p>
                <p className="card-text text-center">
                  [ראה הסברים (לפי המספרים) מעבר לדף]
                      </p>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="text-right mt-3 mb-3" style={{ 'font-size': '20px' }}>
          <span className="badge badge-secondary">א. פרטי המעביד</span>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label for="inputFirstName" className="d-flex align-items-right col-form-label">שם
              </label>
            <input id="inputFirstName" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="שם" />
          </div>
          <div className="col-md-3">
            <label for="identity" className="d-flex align-items-right col-form-label">כתובת</label>
            <input id="identity" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="כתובת" />
          </div>
          <div className="col-md-3">
            <label for="phoneNumber" className="d-flex align-items-right col-form-label">מספר טלפון</label>

            <input id="phoneNumber" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="מספר טלפון" />
          </div>
          <div className="col-md-3">
            <label for="case" className="d-flex align-items-right col-form-label">מספר תיק ניכויים</label>
            <input id="case" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="מספר תיק ניכויים" />
          </div>
        </div>
        <div className="text-right mt-3 mb-3" style={{ 'font-size': '20px' }}>
          <span className="badge badge-secondary">ב. פרטי העובד/ת</span>
        </div>
        <div className="row">
          <div className="col-md-2">
            <label for="idEmployee" className="d-flex align-items-right col-form-label">מספר זהות</label>
            <input id="idEmployee" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="מספר זהות" />
          </div>
          <div className="col-md-2">
            <label for="LastNameEmployee" className="d-flex align-items-right col-form-label">שם משפחה</label>
            <input id="LastNameEmployee" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="שם משפחה" />
          </div>
          <div className="col-md-2">
            <label for="FirstNameEmployee" className="d-flex align-items-right col-form-label">שם פרטי</label>
            <input id="FirstNameEmployee" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="שם פרטי" />
          </div>
          <div className="col-md-3">
            <label for="DateImmigration" className="d-flex align-items-right col-form-label">תאריך עליה</label>
            <input id="DateImmigration" type="date" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="תאריך עליה" />
          </div>
          <div className="col-md-3">
            <label for="DateOfBirth" className="d-flex align-items-right col-form-label">תאריך לידה</label>
            <input id="DateOfBirth" type="date" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="תאריך לידה" />
          </div>
        </div>
        <div className="text-right mt-3 mb-3" style={{ 'font-size': '20px' }}>
          <span className="badge badge-secondary">כתובת פרטית</span>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label for="street" className="d-flex align-items-right col-form-label">רחוב / שכונה</label>
            <input id="street" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="רחוב / שכונה" />
          </div>
          <div className="col-md-2">
            <label for="numberHouse" className="d-flex align-items-right col-form-label">מספר</label>
            <input id="numberHouse" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="מספר" />
          </div>

          <div className="col-md-3">
            <label for="city" className="d-flex align-items-right col-form-label">עיר / ישוב</label>
            <input id="city" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="עיר / ישוב" />
          </div>

          <div className="col-md-2">
            <label for="postal_code" className="d-flex align-items-right col-form-label">מיקוד</label>
            <input id="postal_code" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="מיקוד" />
          </div>
          <div className="col-md-2">
            <label for="phoneNumberEmployee" className="d-flex align-items-right col-form-label">מספר טלפון</label>
            <input id="phoneNumberEmployee" type="text" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" placeholder="מיקוד" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 text-right">
            <label for="maleGender" className="d-flex align-items-right col-form-label">מין</label>
            <input type="radio" name="radioGender" className="mr=2" id="maleGender" />
            <label for="maleGender">זכר</label>
            <input className="ml=5" type="radio" name="radioGender" id="maleFeamle" />
            <label for="maleFeamle">נקבה </label>
          </div>

          <div className="col-md-2 text-right">
            <label for="maleGenderSingle" className="d-flex align-items-right col-form-label">מצב משפחתי</label>
            <input type="radio" name="radioGenderStatus" id="maleGenderSingle" value="Single" onClick={this.statusEmploye} />
            <label for="maleGenderSingle">רווק/ה</label>
            <div>
              <input type="radio" name="radioGenderStatus" id="maleGenderMarried" value="Married" onClick={this.statusEmploye} />
              <label for="maleGenderMarried">נשוי/אה </label>
            </div>
            <div>
              <input type="radio" name="radioGenderStatus" id="maleGenderdivorcee" value="ivorcee" onClick={this.statusEmploye} />
              <label for="maleGenderdivorcee">גרוש/ה </label>
            </div>
            <div>
              <input type="radio" name="radioGenderStatus" id="maleGenderwidower" value="widower" onClick={this.statusEmploye} />
              <label for="maleGenderwidower">אלמן/ה </label>
            </div>
            <div>
              <input type="radio" name="radioGenderStatus" id="maleGenderseparated" value="separated" onClick={this.statusEmploye} />
              <label for="maleGenderseparated">פרוד/ה</label>
            </div>
          </div>
          <div className="col-md-3 text-right">
            <label for="fromIsrael" className="d-flex align-items-right col-form-label">תושב ישראל</label>
            <input type="radio" name="radioIsrael" id="fromIsrael" />
            <label for="fromIsrael">כן</label>
            <div>
              <input type="radio" name="radioIsrael" id="NotFromIsrael" />
              <label for="NotFromIsrael">לא</label>
            </div>
          </div>
          <div className="col-md-2 text-right">
            <label for="HMCYes" className="d-flex align-items-right col-form-label">חבר בקופת חולים</label>
            <input type="radio" name="radioHMC" id="HMCYes" value="HMCYes" onClick={this.onChangeHandlerHMC} />
            <label for="HMCYes">כן</label>
            <div>
              <input type="radio" name="radioHMC" id="HMCNo" value="HMCNo" onClick={this.onChangeHandlerHMC} />
              <label for="HMCNo">לא</label>
            </div>
            {this.state.HMCYes ?
              <div>
                <h6><u>שם הקופה</u></h6>
                <div>
                  <input type="radio" name="radioHMCName" id="HMClalit" value="HMClalit" />
                  <label for="HMClalit">כללית</label>
                </div>
                <div>
                  <input type="radio" name="radioHMCName" id="HMCMacabi" value="HMCMacabi" />
                  <label for="HMCMacabi">מכבי</label>
                </div>
                <div>
                  <input type="radio" name="radioHMCName" id="HMCMehodit" value="HMCMehodit" />
                  <label for="HMCMehodit">מאוחדת</label>
                </div>
                <div>
                  <input type="radio" name="radioHMCName" id="HMCLeimut" value="HMCLeimut" />
                  <label for="HMCLeimut">לאומית</label>
                </div>
              </div> : null

            }

          </div>
        </div>
        <div className="text-right mt-3 mb-3" style={{ 'font-size': '19px' }}>
          <span className="badge badge-secondary">ג. פרטים על ילדי שבשנת המס טרם מלאו להם 19 שנה
          </span>
        </div>
        <div className="text-right">
          <button className="btn btn-success ml-3" onClick={this.addInput}>הוסף ילד</button>
        </div>
        {this.state.inputsKids.map(node =>
          <div>
            <div className="row">
              <div className="col-md-4">
                <label for="kidName" className="d-flex align-items-right col-form-label">שם</label>
                <input id="kidName" type="text" className="form-control mb-2" aria-label="Username"
                  aria-describedby="basic-addon1" placeholder="שם הילד" />
              </div>
              <div className="col-md-4">
                <label for="identityKid" className="d-flex align-items-right col-form-label">מספר זהות</label>
                <input id="identityKid" type="text" className="form-control mb-2" aria-label="Username"
                  aria-describedby="basic-addon1" placeholder="מספר זהות הילד" />
              </div>
              <div className="col-md-4">
                <label for="dateKid" className="d-flex align-items-right col-form-label">תאריך לידה</label>
                <input id="dateKid" type="date" className="form-control mb-2" aria-label="Username" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-right">
                <input type="checkbox" className="form-check-input mt-2" id="option1" />
                <label className="form-check-label mr-3" for="option1">הילד נמצא בחזקתי</label>
                <div>
                  <input type="checkbox" className="form-check-input mt-2" id="option2" />
                  <label className="form-check-label mr-3" for="option2">אני מקבל/ת בגינו/ה קצבת ילדים מביטוח לאומי </label>
                </div>
              </div>
            </div>
          </div>)}


        <div className="text-right mt-3 mb-3" style={{ 'font-size': '19px' }}>
          <span className="badge badge-secondary">ד. פרטים על הכנסותי ממעביד זה
          </span>
        </div>
        <div className="row">
          <div className="col-md-2">
            <div className="text-right mb-2">
              <input type="checkbox" className="form-check-input mt-2" id="SalaryMonthly" />
              <label className="form-check-label mr-3" for="SalaryMonthly">משכורת חודש</label>
            </div>
            <div className="text-right mb-2">
              <input type="checkbox" className="form-check-input mt-2" id="Extrasalary" />
              <label className="form-check-label mr-3" for="Extrasalary">משכורת נוספת</label>
            </div>

          </div>
          <div className="col-md-2 ">
            <div className="text-right mb-2">
              <input type="checkbox" className="form-check-input mt-2" id="Partialsalary" />
              <label className="form-check-label mr-3" for="Partialsalary">משכורת חלקית</label>
            </div>
            <div className="text-right mb-2">
              <input type="checkbox" className="form-check-input mt-2" id="hiredman" />
              <label className="form-check-label mr-3" for="hiredman">שכר עבודה</label>
            </div>

          </div>
          <div className="col-md-2">
            <div className="text-right mb-2">
              <input type="checkbox" className="form-check-input mt-2" id="Annuity" />
              <label className="form-check-label mr-3" for="Annuity">קיצבה</label>
            </div>
            <div className="text-right mb-2">
              <input type="checkbox" className="form-check-input mt-2" id="scholarship" />
              <label className="form-check-label mr-3" for="scholarship">מלגה</label>
            </div>

          </div>


        </div>
        <div className="row">
          <div className="col-md-6">
            <label for="start_date" className="d-flex align-items-right col-form-label">תאריך תחילת העבודה בשנת המס</label>
            <input id="start_date" type="date" className="form-control mb-2" aria-label="Username"
              aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="text-right mt-3 mb-3" style={{ 'font-size': '19px' }}>
          <span className="badge badge-secondary">ה. פרטים על הכנסות אחרות
          </span>
        </div>
        <div className="row">
          <div className="col-md-5 text-right">
            <input type="radio" name="anotherIncomeMore" id="NoIncomemMore" value="NoIncomemMore" onClick={this.onClickMoreIncome} />
            <label for="NoIncomemMore">אין לי הכנסות אחרות לרבות מלגות</label>


            <div>
              <input type="radio" name="anotherIncomeMore" id="yesIncomeMore" value="yesIncomeMore" onClick={this.onClickMoreIncome} />
              <label for="yesIncomeMore">
                יש לי הכנסות נוספות כמפורט להלן</label>
            </div>
          </div>
        </div>
        {this.state.incomeStatus ?
          <div>
            <div className="row">
              <div className="col-md-2">
                <div className="text-right mb-2">
                  <input type="checkbox" className="form-check-input mt-2" id="SalaryMonthlyMore" />
                  <label className="form-check-label mr-3" for="SalaryMonthlyMore">משכורת חודש</label>
                </div>
                <div className="text-right mb-2">
                  <input type="checkbox" className="form-check-input mt-2" id="ExtrasalaryMore" />
                  <label className="form-check-label mr-3" for="ExtrasalaryMore">משכורת נוספת</label>
                </div>

              </div>
              <div className="col-md-2 ">
                <div className="text-right mb-2">
                  <input type="checkbox" className="form-check-input mt-2" id="PartialsalaryMore" />
                  <label className="form-check-label mr-3" for="PartialsalaryMore">משכורת חלקית</label>
                </div>
                <div className="text-right mb-2">
                  <input type="checkbox" className="form-check-input mt-2" id="hiredmanMore" />
                  <label className="form-check-label mr-3" for="hiredmanMore">שכר עבודה</label>
                </div>

              </div>
              <div className="col-md-2">
                <div className="text-right mb-2">
                  <input type="checkbox" className="form-check-input mt-2" id="AnnuityMore" />
                  <label className="form-check-label mr-3" for="AnnuityMore">קיצבה</label>
                </div>
                <div className="text-right mb-2">
                  <input type="checkbox" className="form-check-input mt-2" id="scholarshipMore" />
                  <label className="form-check-label mr-3" for="scholarshipMore">מלגה</label>
                </div>

              </div>

            </div>
            <div className="row">
              <div className="col-md-2 text-right mb-2">
                <input type="checkbox" className="form-check-input mt-2" id="textAnotherPlace" value="checkBoxAnotherPlace" onClick={this.checkBoxMoreIncome} />
                <label className="form-check-label mr-3" for="textAnotherPlace">ממקום אחר .. </label>
              </div>
              {this.state.checked ?
                <div className="col-md-2 text-right mb-2 mt-2">
                  <input id="textAnotherPlace" type="text" className="form-control mb-2" aria-label="Username"
                  />
                </div> : null

              }
            </div>
            <div className="row">
              <div className="col-md-12 text-right">
                <input type="radio" className="form-check-input mt-2 mb-2" name="RadioMore" id="option1More" />
                <label className="form-check-label mr-3" for="option1More">אבקש לקבל נקודות זיכוי ומדרגות מס כנגד הכנסתי זו (סעיף ד). איני מקבל/ת אותם בהכנסה אחרת.</label>
                <div>
                  <input type="radio" className="form-check-input mt-2 mb-2" name="RadioMore" id="option2More" />
                  <label className="form-check-label mr-3" for="option2More">אני מקבל/ת נקודות זיכוי ומדרגות מס בהכנסה אחרת ועל כן איני זכאי/ת להם כנגד הכנסה זו.</label>
                </div>
                <div className="mb-3">

                </div>
                <div>
                  <input type="checkbox" className="form-check-input mt-2 mb-2" id="option3Morecheckbox" />
                  <label className="form-check-label mr-3" for="option3Morecheckbox">אין מפרישים עבורי לקרן השתלמות בגין הכנסתי האחרת, או שכל הפרשות המעביד לקרן השתלמות בגין הכנסתי האחרת מצורפות להכנסתי האחרת.</label>
                </div>
                <div>
                  <input type="checkbox" className="form-check-input mt-2 mb-2" id="option4Morecheckbox" />
                  <label className="form-check-label mr-3" for="option4Morecheckbox">אין מפרישים עבורי לקצבה/לביטוח אובדן כושר עבודה/פיצויים בגין הכנסתי האחרת, או שכל הפרשות המעביד לקצבה/לביטוח אובדן כושר עבודה/פיצויים בגין הכנסתי האחרת מצורפות להכנסתי האחרת.</label>
                </div>
              </div>

            </div>
          </div> : null
        }
        <div className="text-right mt-3 mb-3" style={{ 'font-size': '19px' }}>
          <span className="badge badge-secondary">ו. פרטים על בן/בת הזוג</span>
        </div>
        {this.state.marriedStatus ?
          <div>
            <div className="row">
              <div className="col-md-2">
                <label for="idEmployeePartner" className="d-flex align-items-right col-form-label">מספר זהות</label>
                <input id="idEmployeePartner" type="text" className="form-control mb-2" aria-label="Username"
                  aria-describedby="basic-addon1" placeholder="מספר זהות" />
              </div>
              <div className="col-md-2">
                <label for="LastNameEmployeePartner" className="d-flex align-items-right col-form-label">שם משפחה</label>
                <input id="LastNameEmployeePartner" type="text" className="form-control mb-2" aria-label="Username"
                  aria-describedby="basic-addon1" placeholder="שם משפחה" />
              </div>
              <div className="col-md-2">
                <label for="FirstNameEmployeePartner" className="d-flex align-items-right col-form-label">שם פרטי</label>
                <input id="FirstNameEmployeePartner" type="text" className="form-control mb-2" aria-label="Username"
                  aria-describedby="basic-addon1" placeholder="שם פרטי" />
              </div>
              <div className="col-md-3">
                <label for="DateImmigrationPartner" className="d-flex align-items-right col-form-label">תאריך עליה</label>
                <input id="DateImmigrationPartner" type="date" className="form-control mb-2" aria-label="Username"
                  aria-describedby="basic-addon1" placeholder="תאריך עליה" />
              </div>
              <div className="col-md-3">
                <label for="DateOfBirthPartner" className="d-flex align-items-right col-form-label">תאריך לידה</label>
                <input id="DateOfBirthPartner" type="date" className="form-control mb-2" aria-label="Username"
                  aria-describedby="basic-addon1" placeholder="תאריך לידה" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 text-right">
                <input type="radio" name="IncomeMyPartner" id="IncomeMyPartnerNo" />
                <label for="IncomeMyPartnerNo">אין לבן/בת הזוג כל הכנסה</label>
                <div>
                  <input type="radio" name="IncomeMyPartner" id="IncomeMyPartnerYes" />
                  <label for="IncomeMyPartnerYes">
                    יש לבן/בת הזוג הכנסה</label>
                </div>
                <div>
                  <input type="checkbox" className="form-check-input mt-2 mb-2" id="option3" />
                  <label className="form-check-label mr-3" for="option3">עבודה/קיצבה/עסק</label>
                </div>
                <div>
                  <input type="checkbox" className="form-check-input mt-2 mb-2" id="option4" />
                  <label className="form-check-label mr-3" for="option4">הכנסה אחרת</label>
                </div>
              </div>
            </div>
          </div> : <div className="alert alert-primary text-right mb-2">חלק זה רלוונטי רק אם הינך נשוי/אה</div>}
        <div className="text-right mt-3 mb-3" style={{ 'font-size': '19px' }}>
          <span className="badge badge-secondary">ז. שינויים במהלך השנה
            </span>
     
            <div className="alert alert-primary mt-3">
              חלק זה, המופיע בטופס 101 המודפס, אינו רלוונטי מכיוון שמדובר בטופס ממוחשב.

              על כל שינוי שיחול בפרטים שמילאת בטופס, יש להודיע למעביד עד שבוע ימים מתאריך השינוי, ע"י מילוי טופס חדש במערכת זו או בכל אמצעי שהמעביד מאפשר.
                </div>
          </div>
       

      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("root"));



