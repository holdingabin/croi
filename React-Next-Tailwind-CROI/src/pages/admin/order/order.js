import Head from 'next/head'
   import BarraLateral from '../../../components/admin/barra_lateral';
   import NavBar from '../../../components/admin/navbar';

import useFetch from '../../hooks/useFetch'
import endPoints from '../../../services/rest/api'

export default function Home() {

   const order = useFetch(endPoints.order.order_list)

   return (
         <div>
               <Head>
                  <title>Create Next App</title>
                  <meta name="description" content="Generated by create next app" />
                  <link rel="icon" href="/favicon.ico" />
               </Head>
               <main className="bg-black">
                     <div>
                           <NavBar />
                           <div className="flex overflow-hidden bg-white pt-16">
                              <BarraLateral />
                              <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                              <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                                 <main>
                                       {/* SOLICITUDD */}

                                       <div id="main-content" className="pt-6 px-4">
                                          <main>
                                             <div className="pt-6 px-4">
                                                   <div className="w-full">
                                                      <section className="container mx-auto p-6 font-mono">
                                                         <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                                                               <nav className="flex mb-5" aria-label="Breadcrumb">
                                                                  <ol className="inline-flex items-center space-x-1 md:space-x-2">
                                                                     <li className="inline-flex items-center">
                                                                           <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                                                              <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                                                              Inicio
                                                                           </a>
                                                                     </li>
                                                                     <li>
                                                                           <div className="flex items-center">
                                                                              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" className="evenodd"></path></svg>
                                                                              <a href="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Proyectos</a>
                                                                           </div>
                                                                     </li>
                                                                     <li>
                                                                           <div className="flex items-center">
                                                                              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" className="evenodd"></path></svg>
                                                                              <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">Categorias</span>
                                                                           </div>
                                                                     </li>
                                                                  </ol>
                                                               </nav>
                                                               <div className="w-full overflow-x-auto">
                                                                  <h1>Categorias</h1>
                                                                  <table className="w-full">
                                                                     <thead>
                                                                           <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                                                              <th className="px-4 py-3">ID</th>
                                                                              <th className="px-4 py-3">actionsBuyId</th>
                                                                              <th className="px-4 py-3">investmentsBuyId</th>
                                                                              <th className="px-4 py-3">bondsBuyId</th>
                                                                              <th className="px-4 py-3">loansId</th>
                                                                           </tr>
                                                                     </thead>
                                                                     <tbody className="bg-white">
                                                                              <>
                                                                                 {order.map((item, i) => {
                                                                                       return (
                                                                                          <>
                                                                                             <tr className="text-gray-700">
                                                                                                   <td className="px-4 py-3 text-xs border">
                                                                                                      <span className="px-2 py-1 font-semibold leading-tight bg-blue-100 rounded-sm">{item.id} </span>
                                                                                                   </td>
                                                                                                   <td className="px-4 py-3 text-xs border">
                                                                                                      <span className="px-2 py-1 font-semibold leading-tight  bg-blue-100 rounded-sm">{item.actionsBuyId} </span>
                                                                                                   </td>
                                                                                                   <td className="px-4 py-3 text-xs border">
                                                                                                      <span className="px-2 py-1 font-semibold leading-tight bg-blue-100 rounded-sm  line-clamp-4">{item.investmentsBuyId} </span>
                                                                                                   </td>
                                                                                                   <td className="px-4 py-3 text-xs border">
                                                                                                      <span className="px-2 py-1 font-semibold leading-tight bg-blue-100 rounded-sm">{item.bondsBuyId} </span>
                                                                                                   </td>
                                                                                                   <td className="px-4 py-3 text-xs border">
                                                                                                      <span className="px-2 py-1 font-semibold leading-tight bg-blue-100 rounded-sm">{item.loansId} </span>
                                                                                                   </td>
                                                                                             </tr>
                                                                                          </>
                                                                                       )
                                                                                 })}
                                                                              </>
                                                                     </tbody>
                                                                  </table>
                                                               </div>
                                                         </div>
                                                      </section>
                                                   </div>
                                             </div>
                                          </main>
                                       </div>
                                       {/* SOLICITUD FIN */}
                                 </main>
                              </div>
                           </div>
                     </div>
               </main>
         </div>
   )
}