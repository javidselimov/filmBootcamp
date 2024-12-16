
### Modul 4. "Film orqonayzerinin təkmilləşdirilməsi" layihəsi

## 1. Tapşırığın Təsviri  
"Film orqonayzerinin təkmilləşdirilməsi " adlı mövcud layihəni Texniki Tapşırığa (TT) uyğun olaraq təkmilləşdirmək və tamamlamaq tələb olunurdu. Layihənin ilkin versiyası başqa bir developer tərəfindən hazırlanmış, lakin yarımçıq qalmışdı. Məqsəd layihəni tamamlayaraq bütün texniki və funksional tələblərə cavab vermək idi.  

## 2. İlkin Vəziyyət  
Kod Bazası: Layihə çərçivəsində React-in sinif komponentləri (Class Components) istifədə olunurdu.
Funksionallıq: Ən əsas səhifədə boş bir axtarış formu, boş film siyahısı və "Seçilmiş Filmlər" ünvənı üçün bir placeholder var idi. Siyahının ilkin adi "Yeni Siyahı" olaraq təyin olunmuşdu.

## 3. Əsas Xüsusiyyətlər  

Film Axtarışı: İstifadəçi OMDb API vasitəsilə film adı yazaraq axtarış edə bilir.
Filmlərin Seçilməsi və Seçimin Ləğv Edilməsi: İstifadəçi filmləri "Seçilmiş Filmlər" siyahısına əlavə edə bilir. Eyni filmi təkrər əlavə etməyə icazə verilmir. Siyahıdan film silmək də mümkün olur.
Siyahın Adını Dəyişdirmək: İstifadəçi siyahının adını məsələn, "Mənim Siyahım", olaraq dəyişdə bilər.
Siyahını Yadda Saxlamaq: İstifadəçi siyahını serverə yadda saxlayır. Siyahı yadda saxlanıldıqdan sonra siyahı adını dəyişdirmək mümkün olmur və unikal paylaşıla bilən link əks olunur.
Link Üzərindən Siyahıya Baxmaq: Linkə klik etdikdə, siyahının adı və seçilmiş filmlərin siyahısı əks olunur. Hər filmə IMDB üzrə link də təyin olunur.

## 4. Edilən Dəyişikliklər  
Sinif Komponentlərinin Funksional Komponentlərə Keçirilməsi: Bütün layihə React Hooks (useState, useEffect) vasitəsilə yenidən yazıldı. Bu, daha təmiz kod, asan saxlanılma və modern React standartlarına uyğunluq təmin etdi.
Filmin Silinməsi Üçün Popup Ənvəni:
•	"Seçilmiş Filmlər" siyahısından film silinərkən təsdiq popup çıxır.
•	İstifadəçi təsdiq etdikdə film silinir, imtina etdikdə dəyişiklik olmur.
Xəta İdarəetməsi:
•	OMDb API xətaları (məsələn, limit dolduğunda) üçün mesajlar əlavə olundu.
•	API sorğuları başa çatana dək yüklənmə indikatoru görünür.
Kodun Təmizlənməsi və Refaktorinq:
•	Təkrarlanan kodlar azaldıldı, yenidən istifadə oluna bilən komponentlər yaradıldı.

## 5. Qarşıya Çıxan Problemlər və Həllər  
Çətinlik 1: Sinif komponentlərinin funksional komponentlərə keçirilməsi. Həll: useEffect, useState kimi hook-ların istifadəsi.
Çətinlik 2: Filmə təkrar seçim icazəsinin verilməməsi. Həll: Seçilmiş filmlər siyahısında dublikat yoxlanışı əlavə olundu.
Çətinlik 3: Siyahın saxlanması və unikal linkin yaradılması. Həll: POST sorğusu vasitəsilə unikal ID alınıb link yaradıldı.
Problem 4:  Təkrarlanan Film Girişlərinin Qarşısını Almaq  
İstifadəçilər təsadüfən eyni filmi bir neçə dəfə əlavə edə bilərdi.  Həll: Film əlavə edilməzdən əvvəl təkrar yoxlaması əlavə olundu. Əgər film artıq mövcuddursa, istifadəçiyə xəbərdarlıq mesajı göstərilir və film əlavə edilmir.  

## 6. Yekun İş Prinsipi  
1. İstifadəçi səhifəni açır və axtarış formasını görür.  
2. Filmin adını (məsələn, "Godfather") daxil edir və axtarış düyməsinə klikləyir.  
3. Səhifə OMDb API-dən alınan axtarış nəticələrini göstərir.  
4. İstifadəçi 3 filmi seçir və bu filmlər "Seçilmiş Filmlər" siyahısında göstərilir.  
5. İstifadəçi siyahının adını "Mənim Siyahım" olaraq dəyişdirir.  
6. İstifadəçi "Siyahını Saxla" düyməsinə klikləyir və səhifə unikal keçid yaradır.  
7. Keçidə klik edildikdə yeni səhifə açılır, burada siyahının adı və filmlər göstərilir.  

## 7. Texnologiyalar  
React:  UI və komponent inkişafı üçün istifadə olunub.  
React Hooks: Sinif komponentlərinin məntiqi hooks ilə əvəz edilib.  
OMDB API: GET sorğuları vasitəsilə film məlumatlarını almaq üçün istifadə edilib.  
ACB-API: Saxlanılan siyahılar üçün POST və GET sorğuları yerinə yetirilib.  
HTML/CSS:  Layout və stil tətbiqi üçün istifadə olunub.  

## 8. Nəticələr  
- Texniki Tapşırığa (TT) tam cavab verən bir tətbiq hazırlanıb.  
- İstifadəçilər filmləri axtarmaq, seçmək, saxlamaq və siyahını paylaşmaq imkanına malikdirlər.  
- Təsdiq popup-ları və duplicate yoxlaması ilə istifadəçi təcrübəsi təkmilləşdirilib.  

## 9. Nəticə  

Layihə uğurla tamamlanaraq Texniki Tapşırığın (TT) tələblərinə uyğun şəkildə hazırlanıb. Əsas nailiyyətlərdən biri sinif komponentlərinin funksional komponentlərə çevrilməsi, film siyahısının əlavə/silmə funksionallığının tətbiqi və saxlanma və paylaşma imkanlarının daxil edilməsidir. 
