Təqdimat: Film Təşkilatçısı Layihəsi

1.Tələblər:
o OMDB API istifadə edərək film məlumatlarını əldə etmək.
o Filmləri siyahıya əlavə etmək və eyni filmi təkrar əlavə etməyi bloklamaq.
o Siyahını serverdə yadda saxlamaq və unikal keçid yaratmaq.
o Saxlanılmış siyahını unikal keçidə uyğun olaraq yeni səhifədə göstərmək.
o Mobil cihazlar üçün uyğun dizayn təmin etmək.

2. Görülmüş İşlər
   a. Layihə Mühitinin Qurulması
   • GitHub-da layihəni fork etdim və kompüterimə klonladım.
   • React layihəsini işə salmaq üçün aşağıdakı əmrləri icra etdim:
   • npm install
   • npm run dev
   b. Əsas Funksiyaların Hazırlanması
1. Film Axtarışı:
   o Axtarış üçün OMDB API istifadə etdim.
   o Axtarış nəticələrini göstərmək üçün fetch ilə GET sorğusu göndərdim.
1. Filmlərin Siyahıya Əlavə Edilməsi:
   o “Siyahıya əlavə et” düyməsi ilə filmi siyahıya əlavə etdim.
   o Duplicate filmləri yoxlamaq üçün some() metodundan istifadə etdim.
1. Filmlərin Siyahıdan Silinməsi:
   o Hər film üçün “Sil” düyməsi əlavə etdim ki, istənilən filmi siyahıdan silmək mümkün olsun.
1. Siyahının Saxlanması:
   o Siyahını serverə göndərmək üçün POST sorğusu hazırladım.
   o Serverdən gələn cavabda unikal keçid yaratdım və istifadəçiyə təqdim etdim.
1. Saxlanılmış Siyahının Göstərilməsi:
   o React Router ilə /list/:id marşrutuna uyğun GET sorğusu göndərərək siyahını göstərdim.
   o Hər film üçün IMDb linki əlavə etdim.

1. Qarşılaşılan Problemlər və Həllər
   Problem Həll Yolu
   API-dən məlumatların alınması fetch və async/await ilə asinxron sorğular göndərərək problemi həll etdim.
   Eyni filmlərin təkrar əlavə olunması some() metodu ilə filmin ID-lərini yoxlayaraq duplikatların qarşısını aldım.
   Siyahının saxlanması və link yaradılması POST sorğusu göndərib serverdən gələn unikal ID-ni keçid linkinə çevirdim.
   Mobil uyğunluğun təmin edilməsi CSS Flexbox və media query-lərdən istifadə edərək uyğun dizayn yaratdım.

1. Kod Nümunələri
   Eyni Filmin Təkrar Əlavə Olunmasının Qarşısının Alınması
   const addMovieToList = (movie) => {
   if (!selectedMovies.some((m) => m.imdbID === movie.imdbID)) {
   setSelectedMovies([...selectedMovies, movie]);
   }
   };
   Siyahının Serverə Yadda Saxlanması
   const saveList = createAsyncThunk(
   “lists/savelist”,
   async( updatedList,thunkAPI)=>{
   try{
   const response=await fetch(API_URL,{
   method:POST,
   headers:{
   “Content-Type”:”application/json”,},
   body:JSON.stringify(updatedList),})
   const data=await response.json()
   return data
   }
   }
   )

1. Öyrəndiklərim
   • React ilə komponentlərin yaradılması və state idarəçiliyinin təkmilləşdirilməsi.
   • API sorğuları ilə işləmə bacarığının inkişafı.
   • İstifadəçi təcrübəsini təkmilləşdirmək üçün duplikatların qarşısının alınması kimi problemlərin həlli.
   • Mobil uyğunluq və responsiv dizayn yaratmaq üçün CSS-lə işləmə bacarığı.

1. Nəticə
   • Tapşırığın bütün texniki tələblərini yerinə yetirdim.
   • Tam funksional və istifadəsi asan bir tətbiq təqdim etdim.
   • Texniki çətinlikləri həll edərək layihəni vaxtında və keyfiyyətli şəkildə tamamladım.
