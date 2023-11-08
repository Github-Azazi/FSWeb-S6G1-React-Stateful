/*
Döndürücü Talimatlar

Şu kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-dondurucu.gif

Bu Dondurucu'yü oluşturmak için kaç adet state dilimine ihtiyacınız var? Başlamadan önce biraz üzerine düşünün!

İlk düşüncemize göre 2 state olması lazım:
  - döndürücü görünür olduğunda veya değilken (bu belki boolean olabilir).
  - Button'daki yazı "Döndürcüyü Göster" veya "Döndürücüyü Gizle" olduğunda.

Fakat tek bir state dilimi yeterlidir, döndürücü.
Metini bu state e göre yazdırabiliriz.

ADIM 0:
  Aşağıdaki bileşeni inceleyerek ve state hookunu import ederek başlayın.

ADIM 1:
  State hookunu kullanara, bir 'döndürücüAçık', 'setdöndürücüAcik' çifti oluşturun.
  'döndürücüAçık' true olarak yüklendiğinde döndürücü görünür olacak.

ADIM 2:
  Bu mantıksal bir ifadedir. '&&'nin her iki yanındaki ifadeler true ise,
  sağdaki değer tüm ifadenin değeri olur. '&&'nin her iki tarafında bir ifade varsa
  ve false sa, soldaki tüm satırın değeri olur. 

  Sabit yazılmış 'true' döndürücü açık veya kapalı durumuna göre değiştirin.

ADIM 3:
  'döndürücüAçık' değerine bağlı olarak "Gizle" veya "Göster" metni oluşturmak için button içinde bir ifade kullanın.

ADIM 4:
  Bu click handlerın, "açık olup olmadığını" şu anda olduğunun tersi olacak şekilde ayarlayarak döndürücüyü değiştirmesi gerekir.
  "not" için kullandığımız operatörü hatırlıyor musunuz??
*/
/*
import React from 'react'; 

export default function Dondurucu() {


  const toggleDondurucu = () => {
  
  };

  return (
    <div className='widget-spinner container'>
      <h2>Döndürücü</h2>
      {
        true && <div id='döndürücü' className='spinner'>--+--</div> 
      }
      <button id='toggleDondurucu' onClick={toggleDondurucu}>
         Gizle {}
      </button>
    </div>
  );
}
*/
import React, { useState } from 'react'; // ADIM 0

export default function Dondurucu() {
  const [dondurucuAcik, setDondurucuAcik] = useState(false); // ADIM 1

  const toggleDondurucu = () => {
    setDondurucuAcik(!dondurucuAcik); // ADIM 4
  };

  return (
    <div className='widget-spinner container'>
      <h2>Döndürücü</h2>
      {
        dondurucuAcik && <div id='döndürücü' className='spinner'>--+--</div> // ADIM 2
      }
      <button id='toggleDondurucu' onClick={toggleDondurucu}>
        {dondurucuAcik ? 'Gizle' : 'Göster'} {/* ADIM 3 */}
      </button>
    </div>
  );
}
