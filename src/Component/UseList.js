// import { useList } from 'react';


// export default function UseList() {
//   const [list, { set, removeAt, insertAt, clear }] = useList([
//     "First",
//     "Second",
//     "Third",
//   ]);

//   return (
//     <section>
//       <header>
//         <h1>UseList</h1>
//         <button
//           disabled={list.length < 1}
//           className="link"
//           onClick={() => insertAt(1, "woo")}
//         >
//           Insert After First
//         </button>
//         <button
//           disabled={list.length < 2}
//           className="link"
//           onClick={() => removeAt(1)}
//         >
//           Remove Second Item
//         </button>
//         <button className="link" onClick={() => set([1, 2, 3])}>
//           Reset
//         </button>
//         <button className="link" onClick={() => clear()}>
//           Clear
//         </button>
//       </header>
//       {/* <ListDemo
//         list={list}
//         updateAt={updateAt}
//         push={push}
//         removeAt={removeAt}
//       /> */}
//     </section>
//   );
// }