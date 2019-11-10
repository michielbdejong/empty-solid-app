import React from 'react';
import { LoggedOut, LoginButton, LoggedIn, LogoutButton, useWebId } from '@solid/react';

const App: React.FC = () => {
  return <>
    <LoggedOut>
      <section className="section">
        <p className="content">This app requires you to log in. It requires <b>Control</b> access.</p>
        <LoginButton popup="popup.html" className="button is-large is-primary">Log in to start using</LoginButton>
      </section>
    </LoggedOut>
    <LoggedIn>
      <div className="panel">
        Logged in as {useWebId()}.&nbsp;
        <LogoutButton className="button is-warning" />
      </div>
      (UI goes here)
    </LoggedIn>
  </>;
}

export default App;
