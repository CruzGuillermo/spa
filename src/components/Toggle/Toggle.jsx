import React from "react";

function Toggle() {
  return (
    <div class="flex items-center justify-center ">
      <div class="w-full max-w-lg p-5 rounded-lg ">
        <details class="w-full  border border-white  mb-3 p-5 rounded-lg shadow-xl">
          <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
            Comidas 🍕 🍔 🍟 🍗
          </summary>

          <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Lomitos & Sandwiches
            </summary>
            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/OIP.3DxtJV1I4-yz5Q9xXN1ZZgHaE8?pid=ImgDet&rs=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Lomito Comun</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    calabresa o chorizo picante, ají picante o morrón,Queso
                    Mozzarella, Queso Provolone, Queso cremoso ,cebolla
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.7ea3534d5b1a468e844de64c1aefbde7?rik=9WLRLYiItXzpcg&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Lomito Especial</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    calabresa o chorizo picante, ají picante o morrón,Queso
                    Mozzarella, Queso Provolone, Queso cremoso ,cebolla
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.c61a1986a097a341e1af2efa40173312?rik=2uAMAf3M5q0XwQ&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Lomito Arabe</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    carne de res, cebolla, tomate, lechuga, mayonesa, salsa de
                    tomate
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://www.cadena3.com/admin/playerswf/fotos/ARCHI_550803.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Mila Comun</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    Milanesa, lechuga, tomate y aderezos
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.cfae08ab159aead5c1fdbc1ca7cf8c67?rik=eU5QbGPyi%2fWd%2bw&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Mila Especial</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    Milanesa, lechuga,tomate,huevo, queso, jamon y aderezos
                  </p>
                </div>
              </div>
            </div>
          </details>
          <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Pizzas
            </summary>
            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.5fe98cc8be13526bc406c9b540cc9ef3?rik=UcMh4KWIE2qZBw&riu=http%3a%2f%2fwww.lamejorpizzeria.com%2fwp-content%2fuploads%2f2015%2f09%2fMuzzarella-comun-1024x685.jpg&ehk=19Bv%2fODo1lmw8fxcKvPZbU%2bH7pyYlYr3E9RFnxkBSDI%3d&risl=&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Pizza Comun</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    Queso , tomate, orégano, morron, aceitunas
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://www.solopizzas.info/wp-content/uploads/2020/09/14_maxresdefault-1024x576.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Pizza Especial</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    {/* Pizza especial */}
                    Queso, tomate, orégano, morron, aceitunas, jamon, huevo
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.9822918c8a20fe04ef1ada6cd45cebb5?rik=aSfuVC%2byczAwXA&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Pizza Calabresa</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    {/* Pizza calabresa */}
                    Queso, tomate, orégano, morron, aceitunas, calabresa , huevo
                    y jamon
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://placeralplato.com/files/2016/03/Pizza-de-anchoas.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Pizza Anchoa</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    {/* Pizza anchoa */}
                    Queso, tomate, orégano, morron, aceitunas negras, anchoa
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://img.pystatic.com/products/359178-8bd43c5c-082d-42ba-a77c-156c1ed76c0c.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Pizza Fugazzeta</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    {/* Pizza fugazzeta */}
                    Queso, tomate, orégano, morron, aceitunas, cebolla
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.d5d10b3bdd532421c2a43ebce8437ec4?rik=a5nYEeBh0SYBvQ&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Pizza Choclo</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    {/* Pizza choclo */}
                    Queso, tomate, orégano, morron, aceitunas, choclo
                  </p>
                </div>
              </div>
            </div>
          </details>
          <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Hamburguesas
            </summary>

            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/OIP.pmtE68DkxIScrUNXms-OyQHaE8?pid=ImgDet&rs=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Hamburguesa Queso</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    {/* Hamburguesa queso */}
                    Hamburguesa de carne, queso, tomate, lechuga, cebolla
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/OIP.zOEXNF019skuoaJd5SPr-QHaE7?pid=ImgDet&rs=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Hamburguesa Becon</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    {/* Hamburguesa becon */}
                    Hamburguesa de carne, queso, tomate, lechuga, cebolla, becon
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://thumbs.dreamstime.com/b/hamburger-hamburger-con-le-patate-fritte-e-ortaggi-freschi-79516891.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Hamburguesa Picante</div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    {/* Hamburguesa picante */}
                    Hamburguesa de carne, queso, tomate, lechuga, cebolla,
                    picante
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/OIP.wb3IGSfclc4nVydgFQ5GVAHaFj?pid=ImgDet&rs=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">hamburguesa Doble </div>
                  <p class=" text-base ">$1.500 </p>
                  <p class="text-gray-700 text-base">
                    {/* Hamburguesa doble */}
                    Hamburguesa de carne doble, queso, tomate, lechuga, cebolla
                  </p>
                </div>
              </div>
            </div>
          </details>
        </details>
        <details class="w-full  border border-white  mb-3 p-5 rounded-lg shadow-xl">
          <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
            Bebidas 🍹
          </summary>

          <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Licuados
            </summary>

            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/OIP.PxG_fcve78LX5zrpOFJ25QHaGR?pid=ImgDet&w=600&h=508&rs=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Licuado Frutilla</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Licuado de frutilla, leche, azucar, hielo.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://i0.wp.com/mensclubar.com/wp-content/uploads/2021/06/banana-milkshake.jpg?w=499&ssl=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Licuado Banana</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Licuado de banana, leche, azucar, hielo.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://cdn2.salud180.com/sites/default/files/styles/gallerie/public/gallerie/2020/3/licuados_para_aumentar_masa_muscular_gluteos_2.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Licuado Durazno</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Licuado de durazno, leche, azucar, hielo.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/OIP.bE7O0WN20L7Gc4N52AM06AHaEj?pid=ImgDet&w=650&h=400&rs=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Licuado Mix</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Durazno, frutilla, banana, Naranja, leche, azucar, hielo.
                  </p>
                </div>
              </div>
            </div>
          </details>
          <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Gaseosas
            </summary>

            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.75c13063bf08ae11c66ca98e49e8259e?rik=%2frBNiwD97Zi2vg&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Coca cola</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Coca cola 1L, 500ml, 300ml.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/OIP.uGm1_FGEdBlmD06dxnoMCwHaHa?pid=ImgDet&rs=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Fanta</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">Fanta 1L, 500ml, 300ml.</p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.1bc54ee2d996e9ab53db33f53404ad88?rik=Vq%2fqjyDF8ZYTTw&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Sprite</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Sprite 1L, 500ml, 300ml.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://oechsle.vteximg.com.br/arquivos/ids/1352351-1500-1500/image-282b8bc76b124a2890fb0c95b901ee1b.jpg?v=637123966221200000"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Pepsi</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">Pepsi 1L, 500ml, 300ml.</p>
                </div>
              </div>
            </div>
          </details>
          <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Cervezas
            </summary>

            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.43c0d1e6e527b7154344e55c6a13184e?rik=3lA5pyFK%2fpBi0g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-IFFTwNRd0Ws%2fUmFKmLtVHfI%2fAAAAAAAACHk%2ftL8r6G6mlzM%2fs1600%2fQuilmes%2bcristal2.JPG&ehk=obi7G5rntwBENJCrAuvXHGdxF%2bNENlrwIst%2bbDCHwXc%3d&risl=&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Quilmes</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Quilmes 1L, 500ml, 300ml.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://i.pinimg.com/originals/f4/e8/e6/f4e8e683a4a7216677175969314a7844.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Brahma</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Brahma 1L, 500ml, 300ml.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://http2.mlstatic.com/cerveza-heineken-330-x-24-hasta-18-cuotas-sin-recargo-D_NQ_NP_897651-MLU31240760624_062019-F.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Heineken</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Heineken 1L, 500ml, 300ml.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.93ecb09d7fae0f7c7de47096a3d1559d?rik=5ZxqMpcimDEjjQ&riu=http%3a%2f%2fplazavea.vteximg.com.br%2farquivos%2fids%2f172139-1000-1000%2f20061368.jpg&ehk=DppzDVCOG92eFuhb7rs5mdJXQQh1QaW3EJugt2c5HM0%3d&risl=&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2"> Corona</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Corona 1L, 500ml, 300ml.
                  </p>
                </div>
              </div>
            </div>
          </details>
          <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Aguas
            </summary>

            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/OIP._JvnPWmdLpfgrErxX-Lf7QHaHa?pid=ImgDet&rs=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Agua con Gas</div>
                  <p class=" text-base ">Gratis</p>
                  <p class="text-gray-700 text-base">
                    Agua con gas 1L, 500ml, 300ml.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.7e6769dbddc9ea08f55f4e98f53de4e2?rik=CrRgfNS5ln05Yg&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Ecco de los andes</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Ecco de los andes 1L, 500ml, 300ml.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/OIP._GjPG5hExuo27t22q2PNHAHaHa?pid=ImgDet&rs=1"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Villa del Sur</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Villa del Sur 1L, 500ml, 300ml. Todos los sabores
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/779806254865511-a39e525cff739df2e716105906272797-1024-1024.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2"> Levite</div>
                  <p class=" text-base ">$1.900 </p>
                  <p class="text-gray-700 text-base">
                    Levite 1L, 500ml, 300ml. Todos los sabores
                  </p>
                </div>
              </div>
            </div>
          </details>
        </details>
        <details class="w-full  border border-white  mb-3 p-5 rounded-lg shadow-xl">
          <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
            Desayunos 🥐
          </summary>
          <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Desayunos completos
            </summary>
            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src=" https://th.bing.com/th/id/R.0241f381a7f28c0496ffb29227449c9e?rik=T2TG5bv229WOzA&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Desayuno</div>

                  <p class="text-gray-700 text-base">
                    Desayuno completo con jugo, café, leche, pan, mermelada,
                    queso, jamón, huevo, fruta, etc.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://imgcp.aacdn.jp/img-a/1200/900/aa/gm/article/1/8/5/8/6/5/1559866486/topimg_original.jpeg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Desayuno light</div>

                  <p class="text-gray-700 text-base">
                    Desayuno completo con jugo, café, leche, pan, mermelada,
                    queso, jamón, huevo, fruta, etc.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://www.cardamomo.news/__export/1615220816632/sites/debate/img/2021/03/08/whatsapp_image_2021-03-07_at_13_36_59_x1x_crop1615218297299.jpeg_172596871.jpeg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Desayuno americano</div>

                  <p class="text-gray-700 text-base">
                    Desayuno completo con jugo, café, leche, pan, mermelada,
                    queso, jamón, huevo, fruta, etc.
                  </p>
                </div>
              </div>
               <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.13ca68b55ea5ba68643c3ad8409af806?rik=CdFVg3kPFHXcBQ&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Especial de la Casa</div>

                  <p class="text-gray-700 text-base">
                    Desayuno completo con jugo, café, leche, pan, mermelada,
                    queso, jamón, huevo, fruta, etc.
                  </p>

                    </div>
                    </div>
            </div>
          </details>
          {/* <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Meriendas 🥐
            </summary>
            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
            <div class="m-2 border rounded-lg">
              <img
                class="max-h-60 w-full object-cover rounded-lg"
                src="https://th.bing.com/th/id/R.8de964e939a18d82742c0cb7262fedcb?rik=z"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Merienda</div>

                <p class="text-gray-700 text-base">
                    Merienda completa con jugo, café, leche, pan, mermelada, queso, jamón, huevo, fruta, etc.
                </p>
              </div>
            </div>
            <div class="m-2 border rounded-lg">
              <img
                class="max-h-60 w-full object-cover rounded-lg"
                src="https://th.bing.com/th/id/R.7e6769dbddc9ea08f55f4e98f53de4e2?rik=CrRgfNS5ln05Yg&pid=ImgRaw&r=0"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Merienda</div>

                <p class="text-gray-700 text-base">
                    Merienda completa con jugo, café, leche, pan, mermelada, queso, jamón, huevo, fruta, etc.
                </p>
              </div>
            </div>
            <div class="m-2 border rounded-lg">
              <img

                class="max-h-60 w-full object-cover rounded-lg"
                src="https://th.bing.com/th/id/OIP._GjPG5hExuo27t22q2PNHAHaHa?pid=ImgDet&rs=1"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Merienda</div>

                <p class="text-gray-700 text-base">
                    Merienda completa con jugo, café, leche, pan, mermelada, queso, jamón, huevo, fruta, etc.
                </p>
              </div>
            </div>
            </div>
            </details> */}
        </details>
        <details class="w-full  border border-white  mb-3 p-5 rounded-lg shadow-xl">
          <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
            Postres 🍮
          </summary>

          <details>
            <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
              Tortas 🍰
            </summary>
            <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.8de964e939a18d82742c0cb7262fedcb?rik=zm5iMHKRKtTvbQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-3BvUKYYwvjw%2fUPLsvM9-rdI%2fAAAAAAAABYQ%2f3bHrRQIGlCE%2fs1600%2fselva%2bnegra%2b014.jpg&ehk=fh5Hn4qZsYR9dq1lRZDME%2fLNvS7dzVfFhzAryEZ%2fCNg%3d&risl=&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Torta selva negra</div>
                  <p class=" text-base ">$2.500 </p>
                  <p class="text-gray-700 text-base">
                    Torta de chocolate, crema, nueces, fresas.
                  </p>
                </div>
              </div>

              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.29a5a40629bff7eeedbae83d406da4a4?rik=rU7eXVLZ7%2f4Isg&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Tiramisu</div>
                  <p class=" text-base ">$2.500 </p>
                  <p class="text-gray-700 text-base">
                    Torta de Tiramisu, crema, nueces, fresas.

                    </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1619985632461-f33748ef8f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Cheesecake</div>
                  <p class=" text-base ">$2.500 </p>
                  <p class="text-gray-700 text-base">
                    Torta de chocolate, crema, nueces, fresas.
                  </p>
                </div>
              </div>
              <div class="m-2 border rounded-lg">
                <img
                  class="max-h-60 w-full object-cover rounded-lg"
                  src="https://th.bing.com/th/id/R.64a1ad0376f5bafb17e1c7a659c21337?rik=P3HiILLHn6XLIg&riu=http%3a%2f%2fcdn2.cocinadelirante.com%2fsites%2fdefault%2ffiles%2fimages%2f2017%2f07%2fpasteldechocolateconnaranja2.jpg&ehk=0MJ1Xv9Kd6xc3GkaARxvHXPPhg46M3qUWjfyPv5cUTU%3d&risl=&pid=ImgRaw&r=0"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Torta de chocolate</div>
                  <p class=" text-base ">$2.500 </p>
                  <p class="text-gray-700 text-base">
                    Torta de chocolate, crema, nueces, fresas.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </details>
        <details class="w-full  border border-white  mb-3 p-5 rounded-lg shadow-xl">
          <summary class="w-full font-bold text-xl mb-2 text-dark flex justify-between p-5 px-4 py-3 cursor-pointer  after:content-['+']">
            Promociones 🎁
          </summary>

          <div className="grid sm:grid-cols-2 m-2 grid-cols-1">
            <div class="m-2 border rounded-lg">
              <img
                class="max-h-60 w-full object-cover rounded-lg"
                src="https://mk0cazaofertassmxlbf.kinstacdn.com/wp-content/uploads/2021/04/Applebees-2x1-070421-00.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Desayuno 2x1</div>
                <p class=" text-base ">$1.400 </p>
                <p class="text-gray-700 text-base">
                  Desayuno americano, jugo, café, pan, mantequilla, mermelada.
                </p>
              </div>
            </div>
            <div class="m-2 border rounded-lg">
              <img
                class="max-h-60 w-full object-cover rounded-lg"
                src="https://mk0cazaofertassmxlbf.kinstacdn.com/wp-content/uploads/2021/04/Applebees-2x1-070421-00.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Desayuno 2x1</div>
                <p class=" text-base ">$1.400 </p>
                <p class="text-gray-700 text-base">
                  Desayuno americano, jugo, café, pan, mantequilla, mermelada.
                </p>
              </div>
            </div>
            <div class="m-2 border rounded-lg">
              <img
                class="max-h-60 w-full object-cover rounded-lg"
                src="https://mk0cazaofertassmxlbf.kinstacdn.com/wp-content/uploads/2021/04/Applebees-2x1-070421-00.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Desayuno 2x1</div>
                <p class=" text-base ">$1.400 </p>
                <p class="text-gray-700 text-base">
                  Desayuno americano, jugo, café, pan, mantequilla, mermelada.
                </p>
              </div>
            </div>
            <div class="m-2 border rounded-lg">
              <img
                class="max-h-60 w-full object-cover rounded-lg"
                src="https://mk0cazaofertassmxlbf.kinstacdn.com/wp-content/uploads/2021/04/Applebees-2x1-070421-00.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Desayuno 2x1</div>
                <p class=" text-base ">$1.400 </p>
                <p class="text-gray-700 text-base">
                  Desayuno americano, jugo, café, pan, mantequilla, mermelada.
                </p>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Toggle;
