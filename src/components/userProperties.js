import * as messages from "@/resource/messages"
const generalRule =  [v => !!v || messages.MANDATORY_FIELD];
const emailRule = [ 
    v => !!v || messages.EMAIL_MANDATORY,
    v => /.+@.+/.test(v) || messages.EMAIL_INVALID
];
export const passwordRule = [ 
    v => !!v || messages.PASSWD_MANDATORY,
    v =>  v!==null && v!==undefined && v.length >= 6 || messages.PASSWD_INVALID
];

function passwordConfirmBuilder(user) {
    return [
        v => !!v || messages.PASSWD_MANDATORY,
        v => {
            return v == user.password || messages.CONFIRM_PASSWD_INVALID
        }
    ]
}

function userPropsBuilder(user) {
   return [
        {
            propertyName : "email",
            propertyRule : emailRule, 
            propertyLabel : "e-mail",
            prependedIcon: "Email",
            editable : false
        },
        {
            propertyName : "password",
            propertyRule : passwordRule,
            propertyLabel : "Password",
            prependedIcon: "lock",
            editable : true
        },
        {
            propertyName : "passwordConfirm",
            propertyRule : passwordConfirmBuilder(user),
            propertyLabel : "Conferma password",
            prependedIcon: "check",
            editable : true
        },
        {
            propertyName : "ragione_sociale",
            propertyRule : [],
            propertyLabel : "Ragione sociale",
            prependedIcon: "person",
            editable : true
        },
        {
            propertyName : "name",
            propertyRule : [],
            propertyLabel : "Nome Titolare",
            prependedIcon: "person",
            editable : true
        },
        {
            propertyName : "surname",
            propertyRule : [],
            propertyLabel : "Cognome titolare",
            prependedIcon: "person",
            editable : true
        },
        {
            propertyName : "CF",
            propertyRule : [],
            propertyLabel : "Codice fiscale",
            prependedIcon: "perm_identity",
            editable : true,
        },
        {
            propertyName : "paypal_account",
            propertyRule : generalRule,
            propertyLabel : "Paypal Business account",
            prependedIcon: "undefined",
        },
        {
            propertyName : "description",
            propertyRule : generalRule,
            propertyLabel : "Descrizione Attività",
            prependedIcon: "undefined",
        },
        {
            propertyName : "site",
            propertyRule : generalRule,
            propertyLabel : "Sito",
            prependedIcon: "undefined",
        },
        {
            propertyName : "telephone",
            propertyRule : generalRule,
            propertyLabel : "Telefono",
            prependedIcon: "undefined",
        }
   ] 
}

export const userPropsFilteredBuilder = (user, ...requestedUserPropsArray) => {
    return userPropsBuilder(user).filter((el)=>requestedUserPropsArray.includes(el.propertyName))
}
