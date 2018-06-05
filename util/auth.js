import {GoogleSignin} from 'react-native-google-signin';

export const configureAuthGoogle = () =>{

    GoogleSignin.hasPlayServices({autoResolve:true}).then(()=>{
        console.log("PlayServices resolvido")
          
      }).catch((err)=>{
        console.log(err);
      })

      return GoogleSignin.configure({
        scopes: ["https://www.googleapis.com/auth/userinfo.profile"], // what API you want to access on behalf of the user, default is email and profile               
        webClientId: "376407195437-jscj78bd7cf3crtk6t87onmpp3b75m6b.apps.googleusercontent.com",
    });

       

}
export const teste = () =>{
  return "Teste";
}