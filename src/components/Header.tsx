// "use client"
// import { signIn, signOut, useSession } from 'next-auth/react';

// const Header = () => {
//   // const { data: session } = useSession();
//   const session = undefined
//   return (
//     <nav className='navbar'>
//       <div className='navbar-container'>
//         <h2>Expense Tracker</h2>
//         <div>
//           {!session ? (
//             <button onClick={() => signIn()}>Sign In</button>
//           ) : (
//             <>
//               {/* <span>{session.user?.name}</span> */}
//               <button onClick={() => signOut()}>Sign Out</button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
