export const tmpl = `
<main class={{main}}>
  <div>
    <h1>Main page</h1>
    <ul class={{pages}}>
      <li class={{page}}><a href='/login'>Login</a></li>
      <li class={{page}}><a href='/signup'>Registration</a></li>
      <li class={{page}}><a href='/profile'>Profile</a></li>
      <li class={{page}}><a href='/editProfile'>Edit Profile</a></li>
      <li class={{page}}><a href='/changePassword'>Change Password</a></li>
      <li class={{page}}><a href='/404'>404</a></li>
      <li class={{page}}><a href='/serverError'>500</a></li>
      <li class={{page}}><a href='/chat'>Chat</a></li>
    </ul>
  </div>
</main>
`;
