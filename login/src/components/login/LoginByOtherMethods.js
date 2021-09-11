const OtherMethods = (props) => (
    <div id="alternativeLogin">
      <label>Or sign in with:</label>
      <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
  );
  
  const Facebook = (props) => (
    <a href="https://www.google.com/" id="facebookIcon"></a>
  );
  
  const Twitter = (props) => (
    <a href="https://www.google.com/" id="twitterIcon"></a>
  );
  
  const Google = (props) => (
    <a href="https://www.google.com/" id="googleIcon"></a>
  );

  export {
    OtherMethods,
    Facebook,
    Twitter,
    Google
  }