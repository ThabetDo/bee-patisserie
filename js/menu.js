/*use strip*/
const menu = {
    'croissant': [
        // {split: 'كروسان مغطى'},
        {
            name: 'كروسان لوتس',
            price: 45
        },
        {
            name: 'كروسان شوكولا',
            price: 45
        },
        {
            name: 'كروسان لوز',
            price: 45
        },
        // {split: 'بارد'},
        {
            name: 'كروسان حبش',
            price: 45
        },
        {
            name: 'كروسان سلامي',
            price: 45
        },
        {
            name: 'سابوي حبش وسلامي',
            price: 45
        },
        {
            name: 'بيغل حبش',
            price: 45
        },
        // {split: 'كروسان'},
        {
            name: 'جبنة',
            price: 20
        },
        {
            name: 'زعتر',
            price: 20
        },
        {
            name: 'زيتون',
            price: 20
        },
        {
            name: 'شوكولا',
            price: 20
        },
    ],
    'sandwich': [
        // {split: 'الميني ساندويش'},
        {
            name: 'شاورما',
            price: 20
        },
        {
            name: 'فاهيتا',
            price: 20
        },
        {
            name: 'مكسيكي',
            price: 20
        },
        {
            name: 'تونا',
            price: 20
        },
        {
            name: 'دجاج بالخضار',
            price: 20
        },
        {
            name: 'دجاج مسحب',
            price: 20
        },
        {
            name: 'كريسبي',
            price: 20
        },
        {
            name: 'شيش',
            price: 20
        },
        {
            name: 'هوددغ',
            price: 20
        },
        {
            name: 'حبش',
            price: 20
        },
        {
            name: 'سلامي',
            price: 20
        },
    ],
    'tart': [
        // {split: 'تارت المكسرات'},
        {
            name: 'تارت جوز',
            price: 45,
        },
        {
            name: 'تارت لوز',
            price: 45,
        },
        {
            name: 'تارت كاجو',
            price: 45,
        },
        {
            name: 'تارت بندق',
            price: 45,
        },
        {
            name: 'تارت جوز و كراميل',
            price: 45,
        },
        // {split: 'تارت مشكل'}
        {
            name: 'تارت بلوبري',
            price: 40,
        },
        {
            name: 'تارت ستروبري',
            price: 40,
        },
        {
            name: 'تارت أبل بايت',
            price: 40,
        },
        {
            name: 'تارت نسكافيه',
            price: 40,
        },
        {
            name: 'تارت عجوة',
            price: 40,
        },
        {
            name: 'تارت فريز قطع',
            price: 45,
        },
        {
            name: 'تارت سيترون',
            price: 40,
        },
        {
            name: 'تارت بولو',
            price: 40,
        },
        {
            name: 'تارت لوتس',
            price: 45,
        },
        // {split: 'تارت شوكولا'}
        {
            name: 'تارت كيندر',
            price: 45,
        },
        {
            name: 'تارت بوينو',
            price: 45,
        },
        {
            name: 'تارت غالكسي',
            price: 45,
        },
        {
            name: 'تارت مارس',
            price: 45,
        },
        {
            name: 'تارت فليك',
            price: 45,
        },
        {
            name: 'تارت كيت كات',
            price: 45,
        },
        {
            name: 'تارت سنكرز',
            price: 45,
        },
        {
            name: 'تارت توبلرون',
            price: 45,
        },
        {
            name: 'تارت مارشميلو',
            price: 45,
        },
        {
            name: 'تارت إمينمس',
            price: 45,
        },
        {
            name: 'تارت مالترز',
            price: 45,
        },
        {
            name: 'تارت بابلي',
            price: 45,
        },
        {
            name: 'تارت باونتي',
            price: 45,
        },
    ],
    'cake': [
        // {split: 'قطع الكيك'},
        {
            name: 'نوتيلا',
            price: 45,
        },
        {
            name: 'كيندر',
            price: 45,
        },
        {
            name: 'أوبرا',
            price: 45,
        },
        {
            name: 'ريد فيلغت',
            price: 40,
        },
        {
            name: 'كرانش',
            price: 45,
        },
        {
            name: 'نسكافيه',
            price: 45,
        },
        {
            name: 'ديغل',
            price: 45,
        },
        {
            name: 'فرندلي',
            price: 45,
        },
        {
            name: 'أبل كيك',
            price: 40,
        },
        {
            name: 'براونز',
            price: 45,
        },
        {
            name: 'هني بني',
            price: 40,
        },
        {
            name: 'ميكادو شوكولا',
            price: 45,
        },
        {
            name: 'ميكادو فريز',
            price: 45,
        },
        {
            name: 'ميكادو ليمون',
            price: 45,
        },
        {
            name: 'ميكادو نسكافيه',
            price: 45,
        },
        {
            name: 'بستا شيو',
            price: 45,
        },
        {
            name: 'فوندو',
            price: 40,
        },
        {
            name: 'استرهيزي',
            price: 40,
        },

        {
            name: 'كيك البرتقال',
            price: 40,
        },
        {
            name: 'كيك الكراميل',
            price: 40,
        },
        {
            name: 'غالكسي',
            price: 40,
        },
        {
            name: 'اويغي',
            price: 40,
        },
        {
            name: 'موستروا',
            price: 45,
        },
        {
            name: 'ترابيس',
            price: 45,
        },
        {
            name: 'تروف',
            price: 40,
        },
        {
            name: 'موس توت',
            price: 45,
        },
        {
            name: 'بيضة كيندر',
            price: 45,
        },
        {
            name: 'بيضة لوتس',
            price: 45,
        },
        {
            name: 'سوكسيه',
            price: 40,
        },
        {
            name: 'سوكسيه أوريو',
            price: 40,
        },
        {
            name: 'كلير شوكولا',
            price: 20,
        },
        {
            name: 'كلير لوتس',
            price: 20,
        },
        {
            name: 'كلير شوكولا بيضاء',
            price: 20,
        },
        {
            name: 'كريب شوكولا',
            price: 30,
        },
        {
            name: 'كريب لوتس',
            price: 30,
        },
        {
            name: 'فورنوار',
            price: 35,
        },
        {
            name: 'فوربلانش',
            price: 35,
        },


    ],
    'cheesecake': [
        // {split: 'قطع تشيز كيك'},
        {
            name: 'تشيز كيك مطبوخة لوتس',
            price: 45,
        },
        {
            name: 'تشيز كيك مطبوخة بلوبري',
            price: 45,
        },
        {
            name: 'تشيز كيك مطبوخة استروبري',
            price: 45,
        },
        {
            name: 'تشيز كيك مطبوخة أوريو',
            price: 45,
        },
        {
            name: 'تشيز كيك كاسات عادية فريز',
            price: 40,
        },
        {
            name: 'تشيز كيك عادية توت',
            price: 40,
        },
        {
            name: 'تشيز كيك عادية لوتس',
            price: 40,
        },
    ],
    'soiree': [
        // {split: 'سواريه'}
        {
            name: 'هوددغ',
            price: 8
        },
        {
            name: 'جبنة و بقدونس',
            price: 8
        },
        {
            name: 'زيتون',
            price: 8
        },
        {
            name: 'مرتديلا',
            price: 8
        },
        {
            name: 'محمرة',
            price: 8
        },
        {
            name: 'بيتزا',
            price: 8
        },
        {
            name: 'فطر',
            price: 8
        },
        {
            name: 'سبانخ',
            price: 8
        },
    ],
    'donut': [
        {
            name: 'دونت سكر',
            price: 20
        },
        {
            name: 'دونت شوكولا',
            price: 20
        },
        {
            name: 'دونت شوكولا بيضاء',
            price: 20
        },
        {
            name: 'دونت لوتس',
            price: 20
        }
    ],
    'pastries': [
        {
            name: 'بيتزا خضار',
            price: 40
        },
        {
            name: 'بيتزا سلامي',
            price: 40
        },
        {
            name: 'بيتزا حبش',
            price: 40
        },
        {
            name: 'بيتزا بيروني',
            price: 40
        },
        {
            name: 'محمرة وقشوان',
            price: 40
        },
        {
            name: 'فطر وقشوان',
            price: 40
        },
        {
            name: 'بيتزا هوددغ',
            price: 40
        },
        //{split: 'البقجة'},
        {
            name: 'بقجة مرتديلا وقشوان',
            price: 30
        },
        {
            name: 'بقجة زيتون وقشوان',
            price: 30
        },
        {
            name: 'بقجة جبنة بيضة مع قشوان',
            price: 30
        },
        {
            name: 'كاليزوني',
            price: 30
        },
    ],
    'juice': [
        // {split: 'مشروبات ساخنة'},
        {
            name: 'اسبريس',
            price: 40
        },
        {
            name: 'كابتشينو',
            price: 40
        },
        {
            name: 'نسكافيه بلاك',
            price: 40
        },
        {
            name: 'نسكافيه  <dbi>3 in 1 </dbi>',
            price: 40
        },
        {
            name: 'قهوة',
            price: 40
        },
        {
            name: 'شاي',
            price: 40
        },
        {
            name: 'كافي لاتيه',
            price: 40
        },
        {
            name: 'أمريكانو',
            price: 40
        },
        {
            name: 'هوت شوكليت',
            price: 40
        },
        {
            name: 'زهورات',
            price: 40
        },
        {
            name: 'شاي منكه',
            price: 40
        },
        {
            name: 'شاي اخضر',
            price: 40
        },
        {
            name: 'كركديه',
            price: 40
        },
        {
            name: 'نسكافيه <dbi>3 in 1 </dbi> مع حليب',
            price: 40
        },

        // {split: 'مشروبات باردة'},
        {
            name: 'ميرندا تفاح',
            price: 40
        },
        {
            name: 'ميرندا برتقال',
            price: 40
        },
        {
            name: 'أيس تي',
            price: 40
        },
        {
            name: 'ببسي عادي',
            price: 40
        },
        {
            name: 'ببسي دايت',
            price: 40
        },
        {
            name: 'سفن عادي',
            price: 40
        },
        {
            name: 'سفن دايت',
            price: 40
        },
        {
            name: 'عصير برتقال',
            price: 40
        },
        {
            name: 'عصير أناناس',
            price: 40
        },
        {
            name: 'عصير فواكه',
            price: 40
        },
        {
            name: 'عصير مانغو',
            price: 40
        },
        {
            name: 'ميلك شيك فريز',
            price: 40
        },
        {
            name: 'ميلك شيك شوكولا',
            price: 40
        },
        {
            name: 'ميلك شيك لوتس',
            price: 40
        },
        {
            name: 'ميكس بيري',
            price: 40
        },
        {
            name: 'بولو',
            price: 40
        }
    ]
};

const titles = {
    'croissant': 'كروسان',
    'sandwich': 'ميني ساندوتش',
    'tart': 'تارت',
    'cake': 'كيك',
    'cheesecake': 'تشيز كيك',
    's111111': 'حلويات',
    's222222': 'بيتيفور',
    'soiree': 'سواريه',
    'donut': 'دونات',
    'pastries': 'معجنات',
    'juice': 'عصير'
};
const menuList = ['croissant', 'sandwich', 'tart', 'cake', 'cheesecake', 'soiree', 'donut', 'pastries', 'juice'];
const priceUnit = 100;


const url = new URLSearchParams(window.location.search);

if (url.has('i')) {

    const sectionName = url.get('i');
    const title = document.getElementById('title');
    title.innerHTML = titles[sectionName];
    title.parentElement.style.backgroundImage = 'url("./img/cat/' + sectionName.trim() + '.jpg")';
    if (titles[sectionName].length > 7)
    title.parentElement.style.fontSize = '38px';

    if (menuList.find(el => el === sectionName)) {
        let items = ``;
        menu[sectionName].forEach(i => {
            items += `
<div class="card">
    <div class="card-body">
    <div class="name">${i.name}</div> 
    <div class="dotted"></div>
    <div class="price">${i.price * priceUnit}</div>
</div>
</div>
`;
        });
        document.getElementById('main').innerHTML = items;
    }
}
