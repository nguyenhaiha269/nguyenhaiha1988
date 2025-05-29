\---

title: Thêm pdf  và audio vào web như nào đây

aliases:

 \- Thêm pdf  và audio vào web như nào đây

tags:

 \- pdf

 \- MKDOCS

date: 

share: 

category:

\---

Phần 1- Nhúng file pdf vào web

Bước 1- Bạn  cần up file lên google drive nhé.

Bước 2:  Cope lấy cái link share- copy paste sang cửa sổ mới thì ta thấy đuôi của link nhận được có chữ ==view==

Bước 3:  Sửa lại chữ ==view== thành ==preview== và paste link này vào cấu trúc embeded thôi là xong rồi.

Dưới đây là cấu trúc embebed, bạn copy lại và thay link tương ứng.

<iframe src="https://drive.google.com/file/d/1osXjAxtuNgW-ePlylnPoMJAkR4f09y3h/preview" width="100%" height="800px" frameBorder="0"></iframe>

​           🍀🍀🍀🍀🍀🍀

Tương tự với file mp3 trên google drive nhé

Cách khác dễ dàng hơn là dùng tài khoản soudcloud ( nền tảng nghe nhạc miễn phí).

Chọn file muốn nhúng.

Chọn Nút Share 

Chọn mục embed

rồi copy mã code paste vào

Dưới đây là ví dụ:

Để khi load page không tự động phát (nếu Soundcloud có tùy chọn này trong mã nhúng), bạn có thể cần điều chỉnh tham số trong mã nhúng của Soundcloud (ví dụ: `allow="autoplay"` có thể cần sửa hoặc loại bỏ tùy theo hướng dẫn của Soundcloud).
