const allDialogues = [
      // 1. Asking for Directions
      {
            id: 1,
            title: "Asking for Directions",
            turns: [
                  { who: "A", s: "Excuse me, can you help me?", ipa: "/ɪkˈskjuːz miː kæn juː hɛlp miː/", vn: "Xin lỗi, bạn có thể giúp tôi không?" },
                  { who: "B", s: "Of course! What do you need?", ipa: "/əv ˈkɔːrs wʌt duː juː niːd/", vn: "Tất nhiên! Bạn cần gì?" },
                  { who: "A", s: "I'm looking for the train station.", ipa: "/aɪm ˈlʊkɪŋ fər ðə treɪn ˈsteɪʃən/", vn: "Tôi đang tìm ga tàu." },
                  { who: "B", s: "Go straight for two blocks.", ipa: "/ɡoʊ ˈstreɪt fər tuː blɑːks/", vn: "Đi thẳng hai dãy nhà." },
                  { who: "A", s: "Then what should I do?", ipa: "/ðɛn wʌt ʃʊd aɪ duː/", vn: "Sau đó tôi nên làm gì?" },
                  { who: "B", s: "Turn left at the traffic light.", ipa: "/tɜːrn lɛft æt ðə ˈtræfɪk laɪt/", vn: "Rẽ trái ở đèn giao thông." },
                  { who: "A", s: "Is it far from here?", ipa: "/ɪz ɪt fɑːr frəm hɪr/", vn: "Nó có xa từ đây không?" },
                  { who: "B", s: "No, it's about five minutes on foot.", ipa: "/noʊ ɪts əˈbaʊt faɪv ˈmɪnɪts ɑːn fʊt/", vn: "Không, khoảng năm phút đi bộ." },
                  { who: "A", s: "Thank you so much!", ipa: "/ˈθæŋk juː səˈmʌtʃ/", vn: "Cảm ơn bạn rất nhiều!" },
                  { who: "B", s: "You're welcome! Have a good day!", ipa: "/jʊr ˈwɛlkəm hæv ə ɡʊd deɪ/", vn: "Không có gì! Chúc bạn có một ngày tốt lành!" }
            ]
      },
      // 2. At the Airport
      {
            id: 2,
            title: "At the Airport",
            turns: [
                  { who: "A", s: "Excuse me, where is the check-in counter?", ipa: "/ɪkˈskjuːz miː wɛr ɪz ðə tʃɛkˈɪn ˈkaʊntər/", vn: "Xin lỗi, quầy check-in ở đâu?" },
                  { who: "B", s: "It's over there, to your right.", ipa: "/ɪts ˈoʊvər ðɛr tə jʊr raɪt/", vn: "Ở đằng kia, bên phải bạn." },
                  { who: "A", s: "Thank you. Do I need to show my passport?", ipa: "/ˈθæŋk juː duː aɪ nid tə ʃoʊ maɪ ˈpæspɔːrt/", vn: "Cảm ơn. Tôi có cần xuất trình hộ chiếu không?" },
                  { who: "B", s: "Yes, please have it ready.", ipa: "/jɛs pliz hæv ɪt ˈrɛdi/", vn: "Vâng, làm ơn chuẩn bị sẵn." },
                  { who: "A", s: "What time does the flight depart?", ipa: "/wʌt taɪm dʌz ðə flaɪt dɪˈpɑːrt/", vn: "Chuyến bay khởi hành lúc mấy giờ?" },
                  { who: "B", s: "At 3:30 PM. Boarding starts at 3:00.", ipa: "/æt θriː ˈθɜːrdi piː ˈɛm ˈbɔːrdɪŋ stɑːrts æt θriː ˈklɑːk/", vn: "Lúc 3:30 chiều. Lên máy bay bắt đầu lúc 3:00." },
                  { who: "A", s: "Is there a delay?", ipa: "/ɪz ðɛr ə dɪˈleɪ/", vn: "Có bị trễ không?" },
                  { who: "B", s: "No, it's on time.", ipa: "/noʊ ɪts ɑːn taɪm/", vn: "Không, đúng giờ." },
                  { who: "A", s: "Where is the gate?", ipa: "/wɛr ɪz ðə ɡeɪt/", vn: "Cửa ra máy bay ở đâu?" },
                  { who: "B", s: "Gate 12, after security.", ipa: "/ɡeɪt twɛlv ˈæftər sɪˈkjʊrəti/", vn: "Cửa 12, sau khu an ninh." }
            ]
      },
      // 3. At the Bank
      {
            id: 3,
            title: "At the Bank",
            turns: [
                  { who: "A", s: "Hello, I'd like to open a bank account.", ipa: "/həˈloʊ aɪd laɪk tə ˈoʊpən ə bæŋk əˈkaʊnt/", vn: "Xin chào, tôi muốn mở tài khoản ngân hàng." },
                  { who: "B", s: "Sure, what type of account?", ipa: "/ʃʊr wʌt taɪp əv əˈkaʊnt/", vn: "Chắc chắn, loại tài khoản gì?" },
                  { who: "A", s: "A savings account, please.", ipa: "/ə ˈseɪvɪŋz əˈkaʊnt pliz/", vn: "Tài khoản tiết kiệm, làm ơn." },
                  { who: "B", s: "You'll need ID and initial deposit.", ipa: "/jʊl nid aɪˈdiː ænd ɪˈnɪʃəl dɪˈpɑːzɪt/", vn: "Bạn cần ID và tiền gửi ban đầu." },
                  { who: "A", s: "How much is the minimum deposit?", ipa: "/haʊ mʌtʃ ɪz ðə ˈmɪnɪməm dɪˈpɑːzɪt/", vn: "Tiền gửi tối thiểu là bao nhiêu?" },
                  { who: "B", s: "Fifty dollars.", ipa: "/ˈfɪfti ˈdɑːlərz/", vn: "Năm mươi đô la." },
                  { who: "A", s: "Can I get a debit card?", ipa: "/kæn aɪ ɡɛt ə ˈdɛbɪt kɑːrd/", vn: "Tôi có thể có thẻ ghi nợ không?" },
                  { who: "B", s: "Yes, it's included.", ipa: "/jɛs ɪts ɪnˈkluːdɪd/", vn: "Vâng, nó được bao gồm." },
                  { who: "A", s: "How long does it take?", ipa: "/haʊ lɔːŋ dʌz ɪt teɪk/", vn: "Mất bao lâu?" },
                  { who: "B", s: "About two weeks for the card.", ipa: "/əˈbaʊt tuː wiks fər ðə kɑːrd/", vn: "Khoảng hai tuần cho thẻ." }
            ]
      },

      // 4. At the Doctor's Office
      {
            id: 4,
            title: "At the Doctor's Office",
            turns: [
                  { who: "B", s: "Good afternoon. What's your problem today?", ipa: "/ɡʊd ˌæftərˈnuːn wʌts jʊr ˈprɑːbləm təˈdeɪ/", vn: "Chào buổi chiều. Vấn đề của bạn hôm nay là gì?" },
                  { who: "A", s: "I have a headache and a fever.", ipa: "/aɪ hæv ə ˈhɛdeɪk ænd ə ˈfiːvər/", vn: "Tôi bị đau đầu và sốt." },
                  { who: "B", s: "How long have you felt like this?", ipa: "/haʊ lɔːŋ hæv juː fɛlt laɪk ðɪs/", vn: "Bạn cảm thấy như vậy được bao lâu rồi?" },
                  { who: "A", s: "Since yesterday morning.", ipa: "/sɪns ˈjɛstərdeɪ ˈmɔːrnɪŋ/", vn: "Từ sáng hôm qua." },
                  { who: "B", s: "Let me check your temperature.", ipa: "/lɛt miː tʃɛk jʊr ˈtɛmpərətʃər/", vn: "Để tôi kiểm tra nhiệt độ của bạn." },
                  { who: "A", s: "Is it serious?", ipa: "/ɪz ɪt ˈsɪriəs/", vn: "Có nghiêm trọng không?" },
                  { who: "B", s: "No, it's just a cold. You need to rest.", ipa: "/noʊ ɪts dʒʌst ə koʊld juː nid tə rɛst/", vn: "Không, chỉ là cảm lạnh thôi. Bạn cần nghỉ ngơi." },
                  { who: "A", s: "Should I take any medicine?", ipa: "/ʃʊd aɪ teɪk ˈɛni ˈmɛdɪsɪn/", vn: "Tôi có nên uống thuốc không?" },
                  { who: "B", s: "Yes, I'll give you a prescription.", ipa: "/jɛs aɪl ɡɪv juː ə prɪˈskrɪpʃən/", vn: "Vâng, tôi sẽ cho bạn đơn thuốc." },
                  { who: "A", s: "Thank you, doctor!", ipa: "/ˈθæŋk juː ˈdɑːktər/", vn: "Cảm ơn bác sĩ!" }
            ]
      },
      // 5. At the Gym
      {
            id: 5,
            title: "At the Gym",
            turns: [
                  { who: "B", s: "Welcome to our gym! First time here?", ipa: "/ˈwɛlkəm tə aʊər dʒɪm fɜːrst taɪm hɪr/", vn: "Chào mừng đến phòng gym của chúng tôi! Lần đầu đến đây?" },
                  { who: "A", s: "Yes, I want to join the gym.", ipa: "/jɛs aɪ wɑːnt tə dʒɔɪn ðə dʒɪm/", vn: "Vâng, tôi muốn tham gia phòng gym." },
                  { who: "B", s: "Do you want a monthly or yearly membership?", ipa: "/duː juː wɑːnt ə ˈmʌnθli ɔːr ˈjɪrli ˈmɛmbərʃɪp/", vn: "Bạn muốn thẻ thành viên theo tháng hay theo năm?" },
                  { who: "A", s: "How much is the monthly membership?", ipa: "/haʊ mʌtʃ ɪz ðə ˈmʌnθli ˈmɛmbərʃɪp/", vn: "Thẻ thành viên hàng tháng giá bao nhiêu?" },
                  { who: "B", s: "It's thirty dollars per month.", ipa: "/ɪts ˈθɜːrdi ˈdɑːlərz pər mʌnθ/", vn: "Ba mươi đô la mỗi tháng." },
                  { who: "A", s: "Can I try it for one day first?", ipa: "/kæn aɪ traɪ ɪt fər wʌn deɪ fɜːrst/", vn: "Tôi có thể thử một ngày trước không?" },
                  { who: "B", s: "Yes, the trial is five dollars.", ipa: "/jɛs ðə ˈtraɪəl ɪz faɪv ˈdɑːlərz/", vn: "Vâng, dùng thử là năm đô la." },
                  { who: "A", s: "What time does the gym open?", ipa: "/wʌt taɪm dʌz ðə dʒɪm ˈoʊpən/", vn: "Phòng gym mở cửa lúc mấy giờ?" },
                  { who: "B", s: "We open at six in the morning.", ipa: "/wi ˈoʊpən æt sɪks ɪn ðə ˈmɔːrnɪŋ/", vn: "Chúng tôi mở cửa lúc sáu giờ sáng." },
                  { who: "A", s: "Perfect! I'll start tomorrow.", ipa: "/ˈpɜːrfɪkt aɪl stɑːrt təˈmɑːroʊ/", vn: "Hoàn hảo! Tôi sẽ bắt đầu vào ngày mai." }
            ]
      },
      // 6. At the Hotel Reception
      {
            id: 6,
            title: "At the Hotel Reception",
            turns: [
                  { who: "A", s: "Hello, I have a reservation.", ipa: "/həˈloʊ aɪ hæv ə ˌrɛzərˈveɪʃən/", vn: "Xin chào, tôi có đặt phòng." },
                  { who: "B", s: "Name and check-in time?", ipa: "/neɪm ænd tʃɛkˈɪn taɪm/", vn: "Tên và giờ check-in?" },
                  { who: "A", s: "John Smith, for today.", ipa: "/dʒɑːn smɪθ fər təˈdeɪ/", vn: "John Smith, cho hôm nay." },
                  { who: "B", s: "Here's your key, room 205.", ipa: "/hɪrz jʊr kiː rum tuː ˈoʊ faɪv/", vn: "Đây là chìa khóa, phòng 205." },
                  { who: "A", s: "Is breakfast included?", ipa: "/ɪz ˈbrɛkfəst ɪnˈkluːdɪd/", vn: "Bữa sáng có bao gồm không?" },
                  { who: "B", s: "Yes, from 7 to 10 AM.", ipa: "/jɛs frəm ˈsɛvən tə tɛn eɪ ˈɛm/", vn: "Vâng, từ 7 đến 10 sáng." },
                  { who: "A", s: "Where is the elevator?", ipa: "/wɛr ɪz ði ˈɛləˌveɪtər/", vn: "Thang máy ở đâu?" },
                  { who: "B", s: "To your left.", ipa: "/tə jʊr lɛft/", vn: "Bên trái bạn." },
                  { who: "A", s: "Thank you very much.", ipa: "/ˈθæŋk juː ˈvɛri mʌtʃ/", vn: "Cảm ơn rất nhiều." },
                  { who: "B", s: "Enjoy your stay!", ipa: "/ɪnˈdʒɔɪ jʊr steɪ/", vn: "Chúc bạn nghỉ ngơi vui vẻ!" }
            ]
      },
      // 7. At the Library
      {
            id: 7,
            title: "At the Library",
            turns: [
                  { who: "B", s: "Good morning! How can I help you?", ipa: "/ɡʊd ˈmɔːrnɪŋ haʊ kæn aɪ hɛlp juː/", vn: "Chào buổi sáng! Tôi có thể giúp gì cho bạn?" },
                  { who: "A", s: "I'm looking for English books.", ipa: "/aɪm ˈlʊkɪŋ fər ˈɪŋɡlɪʃ bʊks/", vn: "Tôi đang tìm sách tiếng Anh." },
                  { who: "B", s: "What level are you looking for?", ipa: "/wʌt ˈlɛvəl ɑːr juː ˈlʊkɪŋ fər/", vn: "Bạn đang tìm trình độ nào?" },
                  { who: "A", s: "Beginner level, please.", ipa: "/bɪˈɡɪnər ˈlɛvəl pliz/", vn: "Trình độ sơ cấp, làm ơn." },
                  { who: "B", s: "They're on the second floor.", ipa: "/ðɛr ɑːn ðə ˈsɛkənd flɔːr/", vn: "Chúng ở tầng hai." },
                  { who: "A", s: "Can I borrow three books?", ipa: "/kæn aɪ ˈbɑːroʊ θriː bʊks/", vn: "Tôi có thể mượn ba cuốn sách không?" },
                  { who: "B", s: "Yes, but you need a library card.", ipa: "/jɛs bʌt juː nid ə ˈlaɪbrɛri kɑːrd/", vn: "Vâng, nhưng bạn cần thẻ thư viện." },
                  { who: "A", s: "How can I get a card?", ipa: "/haʊ kæn aɪ ɡɛt ə kɑːrd/", vn: "Làm thế nào tôi có thể có thẻ?" },
                  { who: "B", s: "Fill out this form and bring your ID.", ipa: "/fɪl aʊt ðɪs fɔːrm ænd brɪŋ jʊr aɪˈdiː/", vn: "Điền vào mẫu này và mang giấy tờ tùy thân của bạn." },
                  { who: "A", s: "Okay, thank you!", ipa: "/oʊˈkeɪ ˈθæŋk juː/", vn: "Được rồi, cảm ơn!" }
            ]
      },
      // 8. At the Post Office
      {
            id: 8,
            title: "At the Post Office",
            turns: [
                  { who: "A", s: "Hi, I need to send a package.", ipa: "/haɪ aɪ nid tə sɛnd ə ˈpækɪdʒ/", vn: "Chào, tôi cần gửi một gói hàng." },
                  { who: "B", s: "Domestic or international?", ipa: "/dəˈmɛstɪk ɔːr ˌɪntərˈnæʃənəl/", vn: "Trong nước hay quốc tế?" },
                  { who: "A", s: "International, to Vietnam.", ipa: "/ˌɪntərˈnæʃənəl tə viˌɛtˈnɑːm/", vn: "Quốc tế, đến Việt Nam." },
                  { who: "B", s: "Weight and size?", ipa: "/weɪt ænd saɪz/", vn: "Trọng lượng và kích thước?" },
                  { who: "A", s: "About 2 kg, small box.", ipa: "/əˈbaʊt tuː ˈkiːləˌɡræmz smɔːl bɑːks/", vn: "Khoảng 2 kg, hộp nhỏ." },
                  { who: "B", s: "That'll cost $25.", ipa: "/ðætl kɑːst ˈtwɛnti faɪv ˈdɑːlərz/", vn: "Sẽ tốn 25 đô." },
                  { who: "A", s: "How long will it take?", ipa: "/haʊ lɔːŋ wɪl ɪt teɪk/", vn: "Sẽ mất bao lâu?" },
                  { who: "B", s: "About 10-14 days.", ipa: "/əˈbaʊt tɛn tə ˈfɔːrˈtin deɪz/", vn: "Khoảng 10-14 ngày." },
                  { who: "A", s: "Can I track it?", ipa: "/kæn aɪ træk ɪt/", vn: "Tôi có thể theo dõi không?" },
                  { who: "B", s: "Yes, with this number.", ipa: "/jɛs wɪð ðɪs ˈnʌmbər/", vn: "Vâng, với số này." }
            ]
      },
      // 9. At the Restaurant
      {
            id: 9,
            title: "At the Restaurant",
            turns: [
                  { who: "A", s: "Hello! Do you have a table for two?", ipa: "/həˈloʊ duː juː hæv ə ˈteɪbəl fər tuː/", vn: "Xin chào! Bạn có bàn cho hai người không?" },
                  { who: "B", s: "Yes, please follow me.", ipa: "/jɛs pliːz ˈfɑːloʊ miː/", vn: "Có, xin hãy theo tôi." },
                  { who: "A", s: "Thank you. Can I see the menu?", ipa: "/ˈθæŋk juː kæn aɪ siː ðə ˈmɛnjuː/", vn: "Cảm ơn. Tôi có thể xem thực đơn không?" },
                  { who: "B", s: "Here you are. What would you like to drink?", ipa: "/hɪr juː ɑːr wʌt wʊd juː laɪk tə drɪŋk/", vn: "Của bạn đây. Bạn muốn uống gì?" },
                  { who: "A", s: "I'd like orange juice, please.", ipa: "/aɪd laɪk ˈɔːrɪndʒ dʒuːs pliːz/", vn: "Tôi muốn nước cam, làm ơn." },
                  { who: "B", s: "And for food?", ipa: "/ænd fər fuːd/", vn: "Còn đồ ăn thì sao?" },
                  { who: "A", s: "I'll have the chicken salad.", ipa: "/aɪl hæv ðə ˈtʃɪkɪn ˈsæləd/", vn: "Tôi sẽ lấy salad gà." },
                  { who: "B", s: "Would you like anything else?", ipa: "/wʊd juː laɪk ˈeniˌθɪŋ ɛls/", vn: "Bạn có muốn gì khác không?" },
                  { who: "A", s: "No, that's all. Thank you!", ipa: "/noʊ ðæts ɔːl ˈθæŋk juː/", vn: "Không, chỉ vậy thôi. Cảm ơn!" },
                  { who: "B", s: "Your order will be ready soon.", ipa: "/jʊr ˈɔːrdər wɪl bi ˈrɛdi suːn/", vn: "Đơn hàng của bạn sẽ sẵn sàng sớm thôi." }
            ]
      },
      // 10. At the Supermarket
      {
            id: 10,
            title: "At the Supermarket",
            turns: [
                  { who: "A", s: "Excuse me, where is the milk?", ipa: "/ɪkˈskjuːz miː wɛr ɪz ðə mɪlk/", vn: "Xin lỗi, sữa ở đâu?" },
                  { who: "B", s: "It's in aisle five, on the left.", ipa: "/ɪts ɪn aɪl faɪv ɑːn ðə lɛft/", vn: "Nó ở lối đi số năm, bên trái." },
                  { who: "A", s: "Thank you! Do you have fresh bread?", ipa: "/ˈθæŋk juː duː juː hæv frɛʃ brɛd/", vn: "Cảm ơn! Bạn có bánh mì tươi không?" },
                  { who: "B", s: "Yes, at the bakery section.", ipa: "/jɛs æt ðə ˈbeɪkəri ˈsɛkʃən/", vn: "Có, ở khu bánh mì." },
                  { who: "A", s: "Where can I find vegetables?", ipa: "/wɛr kæn aɪ faɪnd ˈvɛdʒtəbəlz/", vn: "Tôi có thể tìm rau củ ở đâu?" },
                  { who: "B", s: "They're at the back of the store.", ipa: "/ðɛr æt ðə bæk əv ðə stɔːr/", vn: "Chúng ở phía sau của hàng." },
                  { who: "A", s: "Is there a discount today?", ipa: "/ɪz ðɛr ə ˈdɪskaʊnt təˈdeɪ/", vn: "Hôm nay có giảm giá không?" },
                  { who: "B", s: "Yes, twenty percent off on fruits.", ipa: "/jɛs ˈtwɛnti pərˈsɛnt ɔːf ɑːn fruts/", vn: "Có, giảm hai mươi phần trăm cho trái cây." },
                  { who: "A", s: "Great! Where do I pay?", ipa: "/ɡreɪt wɛr duː aɪ peɪ/", vn: "Tuyệt! Tôi thanh toán ở đâu?" },
                  { who: "B", s: "At the checkout counters at the front.", ipa: "/æt ðə ˈtʃɛkaʊt ˈkaʊntərz æt ðə frʌnt/", vn: "Ở quầy thanh toán phía trước." }
            ]
      },
      // 11. Booking a Hotel Room
      {
            id: 11,
            title: "Booking a Hotel Room",
            turns: [
                  { who: "A", s: "Hello, I'd like to book a room.", ipa: "/həˈloʊ aɪd laɪk tə bʊk ə rum/", vn: "Xin chào, tôi muốn đặt phòng." },
                  { who: "B", s: "For how many nights?", ipa: "/fər haʊ ˈmɛni naɪts/", vn: "Cho bao nhiêu đêm?" },
                  { who: "A", s: "Two nights, please.", ipa: "/tuː naɪts pliz/", vn: "Hai đêm, làm ơn." },
                  { who: "B", s: "Single or double room?", ipa: "/ˈsɪŋɡəl ɔːr ˈdʌbəl rum/", vn: "Phòng đơn hay phòng đôi?" },
                  { who: "A", s: "A double room with a bathroom.", ipa: "/ə ˈdʌbəl rum wɪð ə ˈbæθrum/", vn: "Phòng đôi có phòng tắm." },
                  { who: "B", s: "What date will you arrive?", ipa: "/wʌt deɪt wɪl juː əˈraɪv/", vn: "Bạn sẽ đến ngày nào?" },
                  { who: "A", s: "On May 15th.", ipa: "/ɑːn meɪ ˈfɪftiːnθ/", vn: "Ngày 15 tháng 5." },
                  { who: "B", s: "The room costs eighty dollars per night.", ipa: "/ðə rum kɑːsts ˈeɪti ˈdɑːlərz pər naɪt/", vn: "Phòng giá tám mươi đô la mỗi đêm." },
                  { who: "A", s: "That's fine. I'll take it.", ipa: "/ðæts faɪn aɪl teɪk ɪt/", vn: "Được. Tôi sẽ lấy nó." },
                  { who: "B", s: "Great! Can I have your name, please?", ipa: "/ɡreɪt kæn aɪ hæv jʊr neɪm pliz/", vn: "Tuyệt! Cho tôi xin tên của bạn được không?" }
            ]
      },
      // 12. Buying Bus Tickets
      {
            id: 12,
            title: "Buying Bus Tickets",
            turns: [
                  { who: "A", s: "Excuse me, where can I buy a bus ticket?", ipa: "/ɪkˈskjuːz miː wɛr kæn aɪ baɪ ə bʌs ˈtɪkɪt/", vn: "Xin lỗi, tôi có thể mua vé xe buýt ở đâu?" },
                  { who: "B", s: "At the ticket office over there.", ipa: "/æt ðə ˈtɪkɪt ˈɔfɪs ˈoʊvər ðɛr/", vn: "Ở quầy bán vé đằng kia." },
                  { who: "A", s: "I need a ticket to downtown.", ipa: "/aɪ nid ə ˈtɪkɪt tə ˈdaʊnˈtaʊn/", vn: "Tôi cần một vé đến trung tâm thành phố." },
                  { who: "B", s: "One way or round trip?", ipa: "/wʌn weɪ ɔːr raʊnd trɪp/", vn: "Một chiều hay khứ hồi?" },
                  { who: "A", s: "Round trip, please.", ipa: "/raʊnd trɪp pliz/", vn: "Khứ hồi, làm ơn." },
                  { who: "B", s: "That's five dollars.", ipa: "/ðæts faɪv ˈdɑːlərz/", vn: "Năm đô la." },
                  { who: "A", s: "What time does the bus leave?", ipa: "/wʌt taɪm dʌz ðə bʌs liv/", vn: "Xe buýt khởi hành lúc mấy giờ?" },
                  { who: "B", s: "At ten thirty from platform three.", ipa: "/æt tɛn ˈθɜːrdi frəm ˈplætfɔːrm θriː/", vn: "Lúc mười giờ ba mươi từ sân ga số ba." },
                  { who: "A", s: "Thank you for your help!", ipa: "/ˈθæŋk juː fər jʊr hɛlp/", vn: "Cảm ơn sự giúp đỡ của bạn!" },
                  { who: "B", s: "You're welcome. Have a nice trip!", ipa: "/jʊr ˈwɛlkəm hæv ə naɪs trɪp/", vn: "Không có gì. Chúc bạn có chuyến đi vui vẻ!" }
            ]
      },
      // 13. Meeting a Friend
      {
            id: 13,
            title: "Meeting a Friend",
            turns: [
                  { who: "A", s: "Hi Ben! How are you?", ipa: "/haɪ bɛn haʊ ɑːr juː/", vn: "Chào Ben! Bạn khỏe không?" },
                  { who: "B", s: "I'm fine, thank you! And you?", ipa: "/aɪm faɪn ˈθæŋk juː ənd juː/", vn: "Tôi khỏe, cảm ơn! Còn bạn?" },
                  { who: "A", s: "I'm great! What are you doing today?", ipa: "/aɪm ɡreɪt wʌt ɑːr juː ˈduːɪŋ təˈdeɪ/", vn: "Tôi rất tốt! Hôm nay bạn làm gì?" },
                  { who: "B", s: "I'm going to the park. Would you like to come?", ipa: "/aɪm ˈɡoʊɪŋ tə ðə pɑːrk wʊd juː laɪk tə kʌm/", vn: "Tôi đang đi công viên. Bạn có muốn đi cùng không?" },
                  { who: "A", s: "Yes, I'd love to! What time?", ipa: "/jɛs aɪd lʌv tuː wʌt taɪm/", vn: "Vâng, tôi rất muốn! Mấy giờ?" },
                  { who: "B", s: "At three o'clock. Is that okay?", ipa: "/ət θriː əˈklɒk ɪz ðæt oʊˈkeɪ/", vn: "Lúc ba giờ. Được không?" },
                  { who: "A", s: "That's perfect! Where should we meet?", ipa: "/ðæts ˈpɜːrfɪkt wɛr ʃʊd wiː miːt/", vn: "Hoàn hảo! Chúng ta nên gặp ở đâu?" },
                  { who: "B", s: "Let's meet at the park entrance.", ipa: "/lɛts miːt ət ðə pɑːrk ˈɛntrəns/", vn: "Gặp nhau ở lối vào công viên nhé." },
                  { who: "A", s: "Great! See you then!", ipa: "/ɡreɪt siː juː ðɛn/", vn: "Tuyệt! Hẹn gặp lại!" },
                  { who: "B", s: "See you later!", ipa: "/siː juː ˈleɪtər/", vn: "Hẹn gặp sau!" }
            ]
      },
      // 14. Ordering Food
      {
            id: 14,
            title: "Ordering Food",
            turns: [
                  { who: "A", s: "Hi, can I order some food?", ipa: "/haɪ kæn aɪ ˈɔːrdər sʌm fud/", vn: "Chào, tôi có thể gọi đồ ăn không?" },
                  { who: "B", s: "Yes, what would you like?", ipa: "/jɛs wʌt wʊd juː laɪk/", vn: "Vâng, bạn muốn gì?" },
                  { who: "A", s: "A pizza and a salad.", ipa: "/ə ˈpitsə ænd ə ˈsæləd/", vn: "Một pizza và một salad." },
                  { who: "B", s: "What toppings on the pizza?", ipa: "/wʌt ˈtɑːpɪŋz ɑːn ðə ˈpitsə/", vn: "Toppings gì trên pizza?" },
                  { who: "A", s: "Cheese and pepperoni.", ipa: "/tʃiz ænd ˌpɛpəˈroʊni/", vn: "Phô mai và pepperoni." },
                  { who: "B", s: "Anything to drink?", ipa: "/ˈɛnɪˌθɪŋ tə drɪŋk/", vn: "Uống gì không?" },
                  { who: "A", s: "A soda, please.", ipa: "/ə ˈsoʊdə pliz/", vn: "Một soda, làm ơn." },
                  { who: "B", s: "That'll be $15. Cash or card?", ipa: "/ðætl bi ˈfɪfˈtin ˈdɑːlərz kæʃ ɔːr kɑːrd/", vn: "Tổng cộng 15 đô. Tiền mặt hay thẻ?" },
                  { who: "A", s: "Card, please.", ipa: "/kɑːrd pliz/", vn: "Thẻ, làm ơn." },
                  { who: "B", s: "Thank you. Your order will be ready soon.", ipa: "/ˈθæŋk juː jʊr ˈɔːrdər wɪl bi ˈrɛdi sun/", vn: "Cảm ơn. Đơn hàng của bạn sẽ sẵn sàng sớm." }
            ]
      },
      // 15. Shopping for Clothes
      {
            id: 15,
            title: "Shopping for Clothes",
            turns: [
                  { who: "B", s: "Good morning! Can I help you?", ipa: "/ɡʊd ˈmɔːrnɪŋ kæn aɪ hɛlp juː/", vn: "Chào buổi sáng! Tôi có thể giúp gì cho bạn?" },
                  { who: "A", s: "Yes, I'm looking for a T-shirt.", ipa: "/jɛs aɪm ˈlʊkɪŋ fər ə ˈtiː ʃɜːrt/", vn: "Vâng, tôi đang tìm một chiếc áo thun." },
                  { who: "B", s: "What size do you need?", ipa: "/wʌt saɪz duː juː niːd/", vn: "Bạn cần size nào?" },
                  { who: "A", s: "Size M, please. Do you have it in blue?", ipa: "/saɪz ɛm pliːz duː juː hæv ɪt ɪn bluː/", vn: "Size M, làm ơn. Bạn có màu xanh không?" },
                  { who: "B", s: "Let me check. Yes, we have blue in M.", ipa: "/lɛt miː tʃɛk jɛs wiː hæv bluː ɪn ɛm/", vn: "Để tôi kiểm tra. Vâng, chúng tôi có màu xanh size M." },
                  { who: "A", s: "How much is it?", ipa: "/haʊ mʌtʃ ɪz ɪt/", vn: "Nó giá bao nhiêu?" },
                  { who: "B", s: "It's fifteen dollars.", ipa: "/ɪts ˈfɪftiːn ˈdɑːlərz/", vn: "Mười lăm đô la." },
                  { who: "A", s: "Can I try it on?", ipa: "/kæn aɪ traɪ ɪt ɒn/", vn: "Tôi có thể thử nó không?" },
                  { who: "B", s: "Of course. The fitting room is over there.", ipa: "/əv kɔːrs ðə ˈfɪtɪŋ ruːm ɪz ˈoʊvər ðɛr/", vn: "Tất nhiên. Phòng thử đồ ở đằng kia." },
                  { who: "A", s: "Perfect! I'll take it.", ipa: "/ˈpɜːrfɪkt aɪl teɪk ɪt/", vn: "Hoàn hảo! Tôi sẽ lấy nó." }
            ]
                                    },
      ,
      // 116-118: At the Supermarket - Parts 3,4,5
      {
            id: 116,
            title: "At the Supermarket",
            turns: [
                  { who: "A", s: "Do you sell plant-based milk alternatives?", ipa: "/duː juː sɛl plænt beɪst mɪlk ˌɔːltərˈnætɪvz/", vn: "Bạn có bán sữa thực vật không?" },
                  { who: "B", s: "Yes, we have almond, soy, and oat milk in the refrigerated aisle.", ipa: "/jɛs wi hæv ˈɑːlmənd sɔɪ ænd oʊt mɪlk ɪn ðə rɪˈfrɪdʒəreɪtɪd aɪl/", vn: "Có, chúng tôi có sữa hạnh nhân, đậu nành và yến mạch ở lối kệ lạnh." },
                  { who: "A", s: "Are there gluten-free products here?", ipa: "/ɑːr ðɛr ˈɡluːtən friː ˈprɒdʌkts hɪər/", vn: "Có sản phẩm không chứa gluten không?" },
                  { who: "B", s: "Yes, the gluten-free section is next to the health foods.", ipa: "/jɛs ðə ˈɡluːtən friː ˈsɛkʃən ɪz nɛkst tə ðə hɛlθ fuːdz/", vn: "Có, khu không gluten nằm cạnh thực phẩm tốt cho sức khỏe." },
                  { who: "A", s: "Do you accept coupons from the app?", ipa: "/duː juː əkˈsɛpt ˈkuːpɒnz frəm ði æp/", vn: "Bạn có chấp nhận phiếu giảm giá từ ứng dụng không?" },
                  { who: "B", s: "Yes, scan the barcode at checkout and the discount will apply.", ipa: "/jɛs skæn ðə ˈbɑːrkoʊd æt ˈtʃɛkaʊt ænd ðə dɪsˈkaʊnt wɪl əˈplaɪ/", vn: "Có, quét mã vạch lúc thanh toán sẽ áp dụng giảm giá." },
                  { who: "A", s: "Can I order online and pick up in store?", ipa: "/kæn aɪ ˈɔːrdər ˈɒnlaɪn ænd pɪk ʌp ɪn stɔːr/", vn: "Tôi có thể đặt hàng trực tuyến và nhận tại cửa hàng không?" },
                  { who: "B", s: "Yes, choose ‘Click & Collect’ at checkout and we'll have it ready.", ipa: "/jɛs tʃuːz klɪk ænd kəˈlɛkt æt ˈtʃɛkaʊt ænd wil hæv ɪt ˈrɛdi/", vn: "Có, chọn 'Click & Collect' khi thanh toán và chúng tôi sẽ chuẩn bị." },
                  { who: "A", s: "Do you sell reusable shopping bags?", ipa: "/duː juː sɛl rɪˈjuːzəbəl ˈʃɒpɪŋ bæɡz/", vn: "Bạn có bán túi mua sắm tái sử dụng không?" },
                  { who: "B", s: "Yes, they're at the front near the customer service desk.", ipa: "/jɛs ðeər ɑːt ðə frʌnt nɪər ðə ˈkʌstəmər ˈsɜːrvɪs dɛsk/", vn: "Có, ở phía trước gần quầy dịch vụ khách hàng." }
            ]
      }
      ,
      {
            id: 117,
            title: "At the Supermarket",
            turns: [
                  { who: "A", s: "Is there a section for international foods?", ipa: "/ɪz ðɛr ə ˈsɛkʃən fər ˌɪntəˈnæʃənəl fuːdz/", vn: "Có khu thực phẩm quốc tế không?" },
                  { who: "B", s: "Yes, international ingredients are on aisle nine.", ipa: "/jɛs ˌɪntəˈnæʃənəl ɪnˈɡriːdiənts ɑːr ɒn aɪl naɪn/", vn: "Có, nguyên liệu quốc tế ở lối đi số chín." },
                  { who: "A", s: "Can I return an item if I change my mind?", ipa: "/kæn aɪ rɪˈtɜːrn ən ˈaɪtəm ɪf aɪ tʃeɪndʒ maɪ maɪnd/", vn: "Tôi có thể trả hàng nếu đổi ý không?" },
                  { who: "B", s: "Yes, returns within 14 days with a receipt are accepted.", ipa: "/jɛs rɪˈtɜːrnz wɪðɪn fɔːrˈtiːn deɪz wɪð ə rɪˈsiːt ɑːr ækˈsɛptɪd/", vn: "Có, trả hàng trong 14 ngày có hoá đơn được chấp nhận." },
                  { who: "A", s: "Where are the fresh flowers located?", ipa: "/wɛr ɑːr ðə frɛʃ ˈflaʊərz loʊˈkeɪtɪd/", vn: "Hoa tươi để ở đâu?" },
                  { who: "B", s: "The floral section is near the entrance on the right.", ipa: "/ðə ˈflɔːrəl ˈsɛkʃən ɪz nɪər ði ˈɛntrəns ɒn ðə raɪt/", vn: "Khu hoa gần lối vào phía bên phải." },
                  { who: "A", s: "Do you have a suggestion for a quick dinner?", ipa: "/duː juː hæv ə səˈdʒɛstʃən fər ə kwɪk ˈdɪnər/", vn: "Bạn có gợi ý món tối nhanh nào không?" },
                  { who: "B", s: "Try the ready meals near the deli — they're quick and popular.", ipa: "/traɪ ðə ˈrɛdi miːlz nɪər ðə ˈdɛli ðeər kwɪk ænd ˈpɒpjələr/", vn: "Thử các món ăn sẵn gần quầy deli — nhanh và được ưa thích." },
                  { who: "A", s: "Are there low-sugar options for drinks?", ipa: "/ɑːr ðɛr loʊ ˈʃʊɡər ˈɒpʃənz fər drɪŋks/", vn: "Có đồ uống ít đường không?" },
                  { who: "B", s: "Yes, look for 'low sugar' on the labels in the drinks aisle.", ipa: "/jɛs lʊk fər loʊ ˈʃʊɡər ɒn ðə ˈleɪbəlz ɪn ðə drɪŋks aɪl/", vn: "Có, tìm nhãn 'ít đường' ở lối đồ uống." }
            ]
      }
      ,
      {
            id: 118,
            title: "At the Supermarket",
            turns: [
                  { who: "A", s: "Do you offer home delivery?", ipa: "/duː juː ˈɔːfər hoʊm dɪˈlɪvəri/", vn: "Bạn có giao hàng tận nhà không?" },
                  { who: "B", s: "Yes, we deliver locally for orders over $20.", ipa: "/jɛs wi dɪˈlɪvər ˈloʊkəli fər ˈɔːrdərz ˈoʊvər twɛnti/", vn: "Có, chúng tôi giao trong khu vực cho đơn hàng trên $20." },
                  { who: "A", s: "How long does delivery take?", ipa: "/haʊ lɒŋ dʌz dɪˈlɪvəri teɪk/", vn: "Giao hàng mất bao lâu?" },
                  { who: "B", s: "Usually 2–4 hours for local delivery; next-day for larger orders.", ipa: "/ˈjuːʒəli tuː tuː fɔːr aʊərz fər ˈloʊkəl dɪˈlɪvəri nɛkst deɪ fər ˈlɑːrdʒər ˈɔːrdərz/", vn: "Thường 2–4 giờ cho giao trong khu vực; ngày hôm sau cho đơn lớn." },
                  { who: "A", s: "Can I request substitution if an item is out of stock?", ipa: "/kæn aɪ rɪˈkwɛst ˌsʌbstɪˈtjuːʃən ɪf ən ˈaɪtəm ɪz aʊt əv stɒk/", vn: "Tôi có thể yêu cầu thay thế nếu hết hàng không?" },
                  { who: "B", s: "Yes, indicate consent for substitutions at checkout.", ipa: "/jɛs ˈɪndɪkeɪt kənˈsɛnt fər ˌsʌbstɪˈtjuːʃənz æt ˈtʃɛkaʊt/", vn: "Có, chọn đồng ý thay thế khi thanh toán." },
                  { who: "A", s: "Where do I find the organic vegetables?", ipa: "/wɛr duː aɪ faɪnd ði ɔːrˈɡænɪk ˈvɛdʒtəbəlz/", vn: "Tôi tìm rau hữu cơ ở đâu?" },
                  { who: "B", s: "Organic produce is on the left side of the produce section.", ipa: "/ɔːrˈɡænɪk ˈprɒdjuːs ɪz ɒn ðə lɛft saɪd əv ðə ˈprɒdjuːs ˈsɛkʃən/", vn: "Rau hữu cơ ở bên trái khu sản phẩm tươi." },
                  { who: "A", s: "Do you have a customer service number?", ipa: "/duː juː hæv ə ˈkʌstəmər ˈsɜːrvɪs ˈnʌmbər/", vn: "Bạn có số dịch vụ khách hàng không?" },
                  { who: "B", s: "Yes, call 555-1234 or email support@supermarket.example.", ipa: "/jɛs kɔːl faɪv faɪv faɪv wʌn tuː θriː fɔːr ɔːr iːmeɪl səˈpɔːrt æt ˈsuːpərmɑːrkɪt ɪɡˈzɑːmpəl/", vn: "Có, gọi 555-1234 hoặc email support@supermarket.example." }
            ]
      }
      ,
      // 119-121: At the Pharmacy - Parts 3,4,5
      {
            id: 119,
            title: "At the Pharmacy",
            turns: [
                  { who: "A", s: "Could you tell me where the vitamins are?", ipa: "/kʊd juː tɛl miː wɛr ðə ˈvaɪtəmɪnz ɑːr/", vn: "Bạn có thể cho tôi biết vitamin ở đâu không?" },
                  { who: "B", s: "They are in aisle three next to supplements.", ipa: "/ðeɪ ɑːr ɪn aɪl θriː nɛkst tə ˈsʌplɪmənts/", vn: "Chúng ở lối đi 3 cạnh các sản phẩm bổ sung." },
                  { who: "A", s: "Do you sell sunscreen with high SPF?", ipa: "/duː juː sɛl ˈsʌnskriːn wɪð haɪ ɛs piː ɛf/", vn: "Bạn có bán kem chống nắng có SPF cao không?" },
                  { who: "B", s: "Yes, we have several brands in the skincare aisle.", ipa: "/jɛs wi hæv ˈsɛvrəl brændz ɪn ðə ˈskɪnkeər aɪl/", vn: "Có, chúng tôi có nhiều thương hiệu ở lối chăm sóc da." },
                  { who: "A", s: "Can I speak with a pharmacist about interactions?", ipa: "/kæn aɪ spiːk wɪð ə ˈfɑːrməsɪst əˈbaʊt ˌɪntərˈækʃənz/", vn: "Tôi có thể nói với dược sĩ về tương tác thuốc không?" },
                  { who: "B", s: "Yes, our pharmacist is available at the consultation counter.", ipa: "/jɛs aʊər ˈfɑːrməsɪst ɪz əˈveɪləbl æt ðə ˌkɒnsəlˈteɪʃən ˈkaʊntər/", vn: "Có, dược sĩ của chúng tôi có thể tư vấn tại quầy." },
                  { who: "A", s: "Do you provide prescription delivery?", ipa: "/duː juː prəˈvaɪd prɪˈskrɪpʃən dɪˈlɪvəri/", vn: "Bạn có giao đơn thuốc tận nhà không?" },
                  { who: "B", s: "Yes, we can deliver prescriptions locally for a small fee.", ipa: "/jɛs wi kæn dɪˈlɪvər prɪˈskrɪpʃənz ˈloʊkəli fər ə smɔːl fiː/", vn: "Có, chúng tôi có thể giao đơn thuốc trong khu vực với phí nhỏ." },
                  { who: "A", s: "How long will it take to fill a prescription?", ipa: "/haʊ lɔːŋ wɪl ɪt teɪk tə fɪl ə prɪˈskrɪpʃən/", vn: "Mất bao lâu để làm đơn?" },
                  { who: "B", s: "Usually 15–30 minutes depending on demand.", ipa: "/ˈjuːʒəli fɪfˈtiːn tuː ˈθɜːrti ˈmɪnɪts dɪˈpɛndɪŋ ɒn dɪˈmænd/", vn: "Thường 15–30 phút tuỳ lượng khách." }
            ]
      }
      ,
      {
            id: 120,
            title: "At the Pharmacy",
            turns: [
                  { who: "A", s: "Are over-the-counter cold medicines suitable for children?", ipa: "/ɑːr ˌoʊvər ðə ˈkaʊntər koʊld ˈmɛdɪsɪnz ˈsuːtəbəl fər ˈtʃɪldrən/", vn: "Thuốc trị cảm không cần đơn có phù hợp cho trẻ em không?" },
                  { who: "B", s: "Some are, but please check the age recommendations on the label.", ipa: "/sʌm ɑːr bət pliz tʃɛk ði eɪdʒ ˌrɛkəˌmɛndeɪʃənz ɒn ðə ˈleɪbəl/", vn: "Một số có, nhưng hãy kiểm tra hướng dẫn độ tuổi trên nhãn." },
                  { who: "A", s: "Do you have herbal remedies for upset stomach?", ipa: "/duː juː hæv ˈhɜːrbəl ˈrɛmədiz fər ʌpsɛt ˈstʌmək/", vn: "Bạn có thuốc thảo dược cho đau dạ dày không?" },
                  { who: "B", s: "Yes, ginger tea and some probiotics are available.", ipa: "/jɛs ˈdʒɪndʒər tiː ænd sʌm ˌproʊbaɪˈɒtɪks ɑːr əˈveɪləbl/", vn: "Có, có trà gừng và một số men vi sinh." },
                  { who: "A", s: "Can I get a price check on this item?", ipa: "/kæn aɪ ɡɛt ə praɪs tʃɛk ɒn ðɪs ˈaɪtəm/", vn: "Tôi có thể kiểm giá sản phẩm này không?" },
                  { who: "B", s: "Sure — I can scan it and tell you the current price.", ipa: "/ʃʊr aɪ kæn skæn ɪt ænd tɛl juː ðə ˈkɜːrənt praɪs/", vn: "Được — tôi sẽ quét và cho bạn biết giá hiện tại." },
                  { who: "A", s: "Do you offer a returns policy for unopened items?", ipa: "/duː juː ˈɔːfər ə rɪˈtɜːrnz ˈpɒlɪsi fər ʌnˈoʊpənd ˈaɪtəmz/", vn: "Bạn có chính sách trả hàng cho sản phẩm chưa mở không?" },
                  { who: "B", s: "Unopened items can be returned within 14 days with receipt.", ipa: "/ʌnˈoʊpənd ˈaɪtəmz kæn bi rɪˈtɜːrnd wɪðɪn fɔːrˈtiːn deɪz wɪð rɪˈsiːt/", vn: "Sản phẩm chưa mở có thể trả trong 14 ngày có hóa đơn." },
                  { who: "A", s: "Where can I find first-aid supplies?", ipa: "/wɛr kæn aɪ faɪnd fɜːrst eɪd səˈplaɪz/", vn: "Tôi tìm vật dụng sơ cứu ở đâu?" },
                  { who: "B", s: "First-aid supplies are on the middle shelf in aisle two.", ipa: "/fɜːrst eɪd səˈplaɪz ɑːr ɒn ðə ˈmɪdəl ʃɛlf ɪn aɪl tuː/", vn: "Vật dụng sơ cứu ở kệ giữa lối đi số hai." }
            ]
      }
      ,
      {
            id: 121,
            title: "At the Pharmacy",
            turns: [
                  { who: "A", s: "Do you have a drive-through pharmacy?", ipa: "/duː juː hæv ə draɪv θruː ˈfɑːrməsi/", vn: "Bạn có hiệu thuốc lái xe qua không?" },
                  { who: "B", s: "Yes, our drive-through is open from 9 AM to 6 PM.", ipa: "/jɛs aʊər draɪv θruː ɪz ˈoʊpən frəm naɪn eɪˈɛm tə sɪks piː ˈɛm/", vn: "Có, dịch vụ drive-through mở từ 9h đến 18h." },
                  { who: "A", s: "Can I get a consultation about my medication side effects?", ipa: "/kæn aɪ ɡɛt ə ˌkɒnsəlˈteɪʃən əˈbaʊt maɪ ˌmɛdɪˈkeɪʃən saɪd ɪˈfɛkts/", vn: "Tôi có thể tư vấn về tác dụng phụ của thuốc không?" },
                  { who: "B", s: "Yes, the pharmacist can discuss side effects and alternatives.", ipa: "/jɛs ðə ˈfɑːrməsɪst kæn dɪsˈkʌs saɪd ɪˈfɛkts ænd ɔːlˈtɜːrnətɪvz/", vn: "Có, dược sĩ có thể thảo luận về tác dụng phụ và lựa chọn thay thế." },
                  { who: "A", s: "Do you accept insurance for prescription payments?", ipa: "/duː juː əkˈsɛpt ɪnˈʃʊərəns fər prɪˈskrɪpʃən ˈpeɪmənts/", vn: "Bạn có chấp nhận bảo hiểm cho thanh toán đơn thuốc không?" },
                  { who: "B", s: "We accept most major insurance plans; bring your card.", ipa: "/wi əkˈsɛpt moʊst ˈmeɪdʒər ɪnˈʃʊərəns plænz brɪŋ jʊr kɑːrd/", vn: "Chúng tôi chấp nhận hầu hết bảo hiểm lớn; mang thẻ của bạn." },
                  { who: "A", s: "Can I get a loyalty points balance?", ipa: "/kæn aɪ ɡɛt ə ˈlɔɪəlti pɔɪnts ˈbæləns/", vn: "Tôi có thể kiểm tra điểm tích lũy không?" },
                  { who: "B", s: "Yes, provide your phone number and I'll check your balance.", ipa: "/jɛs prəˈvaɪd jʊr foʊn ˈnʌmbər ænd aɪl tʃɛk jʊr ˈbæləns/", vn: "Có, cho số điện thoại tôi sẽ kiểm tra điểm." },
                  { who: "A", s: "Do you have airless pump bottles for lotions?", ipa: "/duː juː hæv ˈɛərləs pʌmp ˈbɒtəlz fər ˈloʊʃənz/", vn: "Bạn có chai bơm không khí cho kem dưỡng không?" },
                  { who: "B", s: "Yes, they are in the skincare accessories section.", ipa: "/jɛs ðeɪ ɑːr ɪn ðə ˈskɪnkeər ækˈsɛsəriz ˈsɛkʃən/", vn: "Có, nằm trong khu phụ kiện chăm sóc da." }
            ]
      }
      ,
      // 122-124: Hair Salon - Parts 3,4,5
      {
            id: 122,
            title: "Hair Salon",
            turns: [
                  { who: "A", s: "I'd like to color my hair. Do you offer coloring services?", ipa: "/aɪd laɪk tə ˈkʌlɚ maɪ hɛr duː juː ˈɔːfər ˈkʌlərɪŋ ˈsɜːrvɪsɪz/", vn: "Tôi muốn nhuộm tóc. Bạn có làm nhuộm không?" },
                  { who: "B", s: "Yes, we offer full color and highlights by appointment.", ipa: "/jɛs wi ˈɔːfər fʊl ˈkʌlɚ ænd ˈhaɪˌlaɪts baɪ əˈpɔɪntmənt/", vn: "Có, chúng tôi có nhuộm toàn bộ và highlight khi đặt lịch." },
                  { who: "A", s: "How long does a full color take?", ipa: "/haʊ lɒŋ dʌz ə fʊl ˈkʌlɚ teɪk/", vn: "Nhuộm toàn bộ mất bao lâu?" },
                  { who: "B", s: "A full color usually takes 2–3 hours depending on hair length.", ipa: "/ə fʊl ˈkʌlɚ ˈjuːʒəli teɪks tuː tuː θriː aʊərz dɪˈpɛndɪŋ ɒn hɛər lɛŋkθ/", vn: "Thường mất 2–3 giờ tuỳ độ dài tóc." },
                  { who: "A", s: "Do you have senior stylist rates?", ipa: "/duː juː hæv ˈsiːnjər ˈstaɪlɪst reɪts/", vn: "Bạn có giá cho thợ chính không?" },
                  { who: "B", s: "Yes, prices vary by stylist experience; ask about rates when booking.", ipa: "/jɛs praɪsɪz ˈvɛri baɪ ˈstaɪlɪst ɪkˈspɪəriəns æsk əˈbaʊt reɪts wɛn ˈbʊkɪŋ/", vn: "Có, giá khác nhau theo kinh nghiệm thợ; hỏi khi đặt lịch." },
                  { who: "A", s: "Can I bring a photo of the style I want?", ipa: "/kæn aɪ brɪŋ ə ˈfoʊtə ɒv ðə staɪl aɪ wɒnt/", vn: "Tôi có thể mang ảnh kiểu tóc muốn không?" },
                  { who: "B", s: "Yes, photos help us understand the exact look you want.", ipa: "/jɛs ˈfoʊtəz hɛlp ʌs ˌʌndərˈstænd ði ɪɡˈzækt lʊk juː wɒnt/", vn: "Có, ảnh giúp chúng tôi hiểu kiểu bạn muốn." },
                  { who: "A", s: "Do you offer hair treatment packages?", ipa: "/duː juː ˈɔːfər hɛər ˈtriːtmənt ˈpækɪdʒɪz/", vn: "Bạn có gói chăm sóc tóc không?" },
                  { who: "B", s: "Yes, we have deep-conditioning packages at discounted prices.", ipa: "/jɛs wi hæv diːp kənˈdɪʃənɪŋ ˈpækɪdʒɪz æt dɪsˈkaʊntɪd praɪsɪz/", vn: "Có, chúng tôi có gói dưỡng sâu với giá ưu đãi." }
            ]
      }
      ,
      {
            id: 123,
            title: "Hair Salon",
            turns: [
                  { who: "A", s: "Can I book a blow-dry appointment for tomorrow?", ipa: "/kæn aɪ bʊk ə bloʊ draɪ əˈpɔɪntmənt fər təˈmɒroʊ/", vn: "Tôi có thể đặt lịch sấy tóc cho ngày mai không?" },
                  { who: "B", s: "Yes, we have slots at 10 AM and 3 PM — which do you prefer?", ipa: "/jɛs wi hæv slɒts æt tɛn eɪˈɛm ænd θriː piː ˈɛm wɪtʃ duː juː prɪˈfɜːr/", vn: "Có, còn lịch 10h sáng và 3h chiều — bạn chọn giờ nào?" },
                  { who: "A", s: "I'll take the 3 PM slot, please.", ipa: "/aɪl teɪk ðə θriː piː ˈɛm slɒt pliz/", vn: "Tôi chọn 3 giờ chiều." },
                  { who: "B", s: "Great — you're booked. Please arrive 10 minutes early.", ipa: "/ɡreɪt jʊr bʊkt pliz əˈraɪv tɛn ˈmɪnɪts ˈɜːrli/", vn: "Tuyệt — bạn đã được đặt. Vui lòng đến sớm 10 phút." },
                  { who: "A", s: "Do you accept walk-ins on weekdays?", ipa: "/duː juː əkˈsɛpt wɔːk ɪnz ɒn ˈwiːkdeɪz/", vn: "Bạn có nhận khách không hẹn trước vào ngày thường không?" },
                  { who: "B", s: "We accept walk-ins but recommend booking for busy times.", ipa: "/wi əkˈsɛpt wɔːk ɪnz bət ˌrɛkəˈmɛnd ˈbʊkɪŋ fər ˈbɪzi taɪmz/", vn: "Có, nhưng nên đặt trước vào thời điểm đông khách." },
                  { who: "A", s: "What is your cancellation policy?", ipa: "/wɒt ɪz jʊr ˌkænsəˈleɪʃən ˈpɒlɪsi/", vn: "Chính sách huỷ đặt lịch như thế nào?" },
                  { who: "B", s: "Cancel at least 24 hours in advance to avoid a fee.", ipa: "/ˈkænsəl æt list twɛnti fɔːr ˈaʊərz ɪn ədˈvɑːns tə əˈvɔɪd ə fiː/", vn: "Huỷ trước ít nhất 24 giờ để tránh phí." },
                  { who: "A", s: "Do you sell styling products?", ipa: "/duː juː sɛl ˈstaɪlɪŋ ˈprɒdʌkts/", vn: "Bạn có bán sản phẩm tạo kiểu không?" },
                  { who: "B", s: "Yes, our retail shelf has shampoos, sprays, and serums.", ipa: "/jɛs aʊər rɪˈteɪl ʃɛlf hæz ˈʃæmpuːz spreɪz ænd ˈsɪrəmz/", vn: "Có, kệ bán lẻ có dầu gội, xịt và serum." }
            ]
      }
      ,
      {
            id: 124,
            title: "Hair Salon",
            turns: [
                  { who: "A", s: "Can you recommend a treatment for dry hair?", ipa: "/kæn juː ˌrɛkəˈmɛnd ə ˈtriːtmənt fər draɪ hɛr/", vn: "Bạn có gợi ý liệu trình cho tóc khô không?" },
                  { who: "B", s: "Yes, a keratin treatment or weekly deep-conditioning helps a lot.", ipa: "/jɛs ə kəˈrætɪn ˈtriːtmənt ɔːr ˈwiːkli diːp kənˈdɪʃənɪŋ hɛlps ə lɒt/", vn: "Có, liệu trình keratin hoặc dưỡng sâu hàng tuần rất hiệu quả." },
                  { who: "A", s: "Is there an extra charge for long hair?", ipa: "/ɪz ðɛr ən ˈɛkstrə tʃɑːrdʒ fər lɒŋ hɛr/", vn: "Có tính phí thêm cho tóc dài không?" },
                  { who: "B", s: "Yes, longer hair may incur an extra charge due to product use.", ipa: "/jɛs ˈlɒŋɡər hɛr meɪ ɪnˈkɜːr ən ˈɛkstrə tʃɑːrdʒ djuː tə ˈprɒdʌkt juz/", vn: "Có, tóc dài có thể tính thêm phí do dùng nhiều sản phẩm." },
                  { who: "A", s: "Do you provide a consultation before cutting?", ipa: "/duː juː prəˈvaɪd ə ˌkɒnsəlˈteɪʃən bɪˈfɔːr ˈkʌtɪŋ/", vn: "Bạn có tư vấn trước khi cắt không?" },
                  { who: "B", s: "Yes, we always consult to confirm the desired style and length.", ipa: "/jɛs wi ˈɔːlweɪz kənˈsʌlt tə kənˈfɜːrm ðə dɪˈzaɪəd staɪl ænd lɛŋkθ/", vn: "Có, chúng tôi luôn tư vấn để xác nhận kiểu và độ dài mong muốn." },
                  { who: "A", s: "Can I pay by contactless card?", ipa: "/kæn aɪ peɪ baɪ kənˈtæktləs kɑːrd/", vn: "Tôi có thể thanh toán bằng thẻ không tiếp xúc không?" },
                  { who: "B", s: "Yes, we accept contactless payments and mobile wallets.", ipa: "/jɛs wi əkˈsɛpt kənˈtæktləs ˈpeɪmənts ænd ˈmoʊbəl ˈwɒlɪts/", vn: "Có, chúng tôi chấp nhận thanh toán không tiếp xúc và ví điện tử." },
                  { who: "A", s: "Do you offer gift vouchers?", ipa: "/duː juː ˈɔːfər ɡɪft ˈvaʊtʃərz/", vn: "Bạn có tặng phiếu quà tặng không?" },
                  { who: "B", s: "Yes, vouchers are available at the front desk for any amount.", ipa: "/jɛs ˈvaʊtʃərz ɑːr əˈveɪləbl æt ðə frʌnt dɛsk fər ˈɛni əˈmaʊnt/", vn: "Có, phiếu quà tặng có tại quầy cho mọi mệnh giá." }
            ]
      }
      ,
    // 128-130: At the Restaurant - Parts 3,4,5
    {
        id: 128,
        title: "At the Restaurant",
        turns: [
            { who: "A", s: "Could you recommend a popular local dish?", ipa: "/kʊd juː ˌrɛkəˈmɛnd ə ˈpɒpjələr ˈloʊkəl dɪʃ/", vn: "Bạn có thể giới thiệu một món địa phương được ưa thích không?" },
            { who: "B", s: "Our grilled fish with herbs is a customer favorite.", ipa: "/aʊər ɡrɪld fɪʃ wɪð hɜːrbz ɪz ə ˈkʌstəmər ˈfeɪvərɪt/", vn: "Cá nướng với các loại thảo mộc là món được khách ưa thích." },
            { who: "A", s: "Is it spicy?", ipa: "/ɪz ɪt ˈspaɪsi/", vn: "Món đó có cay không?" },
            { who: "B", s: "Mildly — we can make it less spicy if you prefer.", ipa: "/ˈmaɪldli wi kæn meɪk ɪt lɛs ˈspaɪsi ɪf juː prɪˈfɜːr/", vn: "Hơi cay — chúng tôi có thể làm dịu nếu bạn muốn." },
            { who: "A", s: "Do you have a children's menu?", ipa: "/duː juː hæv ə ˈtʃɪldrənz ˈmɛnjuː/", vn: "Bạn có thực đơn cho trẻ em không?" },
            { who: "B", s: "Yes, there are smaller portions and simpler dishes for kids.", ipa: "/jɛs ðɛr ɑːr ˈsmɔːlər pɔːrʃənz ænd ˈsɪmplər dɪʃɪz fər kɪdz/", vn: "Có, có khẩu phần nhỏ hơn và món đơn giản cho trẻ em." },
            { who: "A", s: "Are there vegan options?", ipa: "/ɑːr ðɛr ˈviːɡən ˈɒpʃənz/", vn: "Có món thuần chay không?" },
            { who: "B", s: "Yes, we can prepare several vegan dishes upon request.", ipa: "/jɛs wi kæn prɪˈpeər ˈsɛvrəl ˈviːɡən dɪʃɪz əˈpɒn rɪˈkwɛst/", vn: "Có, chúng tôi có thể chuẩn bị vài món thuần chay theo yêu cầu." },
            { who: "A", s: "Can I see today's specials?", ipa: "/kæn aɪ siː təˈdeɪz ˈspɛʃəlz/", vn: "Cho tôi xem món đặc biệt hôm nay được không?" },
            { who: "B", s: "Certainly — our specials board is right over there.", ipa: "/ˈsɜːrtənli aʊər ˈspɛʃəlz bɔːrd ɪz raɪt ˈoʊvər ðɛr/", vn: "Chắc chắn — bảng món hôm nay ở ngay kia." }
        ]
    },

    {
        id: 129,
        title: "At the Restaurant",
        turns: [
            { who: "A", s: "Excuse me, could we have a highchair for the baby?", ipa: "/ɪkˈskjuːz mi kʊd wiː hæv ə ˈhaɪtʃɛər fər ðə ˈbeɪbi/", vn: "Xin lỗi, chúng tôi có thể lấy ghế cao cho em bé không?" },
            { who: "B", s: "Of course — I'll bring one right away.", ipa: "/əv kɔːrs aɪl brɪŋ wʌn raɪt əˈweɪ/", vn: "Tất nhiên — tôi sẽ mang đến ngay." },
            { who: "A", s: "Is tap water complimentary?", ipa: "/ɪz tæp ˈwɔːtər kəmˈplɪməntəri/", vn: "Nước lọc có miễn phí không?" },
            { who: "B", s: "Yes, tap water is free; bottled water is charged.", ipa: "/jɛs tæp ˈwɔːtər ɪz friː ˈbɒtəld ˈwɔːtər ɪz tʃɑːrdʒd/", vn: "Có, nước máy miễn phí; nước đóng chai tính phí." },
            { who: "A", s: "Could you advise on food allergies?", ipa: "/kʊd juː ədˈvaɪz ɒn fuːd ˈælədʒiz/", vn: "Bạn có thể tư vấn về dị ứng thực phẩm không?" },
            { who: "B", s: "Please tell me the allergen and I'll inform the kitchen.", ipa: "/pliz tɛl mi ði əˈlɜːrdʒən ænd aɪl ɪnˈfɔːrm ðə ˈkɪtʃən/", vn: "Hãy nói tên dị ứng và tôi sẽ báo bếp." },
            { who: "A", s: "Can we have the bill split three ways?", ipa: "/kæn wiː hæv ðə bɪl splɪt θriː weɪz/", vn: "Chúng tôi có thể tách hóa đơn cho ba người không?" },
            { who: "B", s: "Yes, just let me know how you'd like it divided.", ipa: "/jɛs dʒʌst lɛt miː noʊ haʊ jud laɪk ɪt dɪˈvaɪdɪd/", vn: "Có, chỉ cần cho tôi biết bạn muốn chia thế nào." },
            { who: "A", s: "Do you offer gluten-free bread?", ipa: "/duː juː ˈɔːfər ˈɡluːtən friː brɛd/", vn: "Bạn có bánh mì không gluten không?" },
            { who: "B", s: "Yes, we have gluten-free rolls available.", ipa: "/jɛs wi hæv ˈɡluːtən friː roʊlz əˈveɪləbl/", vn: "Có, chúng tôi có bánh mì không gluten." }
        ]
    },

    {
        id: 130,
        title: "At the Restaurant",
        turns: [
            { who: "A", s: "Do you take reservations for tonight?", ipa: "/duː juː teɪk ˌrɛzərˈveɪʃənz fər təˈnaɪt/", vn: "Bạn có nhận đặt chỗ cho tối nay không?" },
            { who: "B", s: "We have a few tables left; what time would you like?", ipa: "/wi hæv ə fjuː ˈteɪbəlz lɛft wɒt taɪm wʊd juː laɪk/", vn: "Chúng tôi còn vài bàn; bạn muốn đặt lúc mấy giờ?" },
            { who: "A", s: "Seven o'clock would be perfect.", ipa: "/ˈsɛvən əˈklɒk wʊd bi ˈpɜːrfɪkt/", vn: "7 giờ tối thì hoàn hảo." },
            { who: "B", s: "Done — we will reserve a table for two at seven.", ipa: "/dʌn wi wɪl rɪˈzɜːrv ə ˈteɪbəl fər tuː æt ˈsɛvən/", vn: "Xong — chúng tôi sẽ giữ bàn cho hai người lúc 7." },
            { who: "A", s: "Can I request a window seat?", ipa: "/kæn aɪ rɪˈkwɛst ə ˈwɪndoʊ siːt/", vn: "Tôi có thể yêu cầu chỗ cạnh cửa sổ không?" },
            { who: "B", s: "We will do our best to accommodate that request.", ipa: "/wi wɪl duː aʊər bɛst tə əˈkɒmədeɪt ðæt rɪˈkwɛst/", vn: "Chúng tôi sẽ cố gắng sắp xếp chỗ đó." },
            { who: "A", s: "Is there parking nearby?", ipa: "/ɪz ðɛr ˈpɑːrkɪŋ ˈnɪərbaɪ/", vn: "Có chỗ đậu xe gần đó không?" },
            { who: "B", s: "Yes, street parking and a public lot two blocks away.", ipa: "/jɛs striːt ˈpɑːrkɪŋ ænd ə ˈpʌblɪk lɒt tuː blɒks əˈweɪ/", vn: "Có, đậu xe trên đường và bãi công cộng cách hai dãy nhà." },
            { who: "A", s: "Do you have a dress code?", ipa: "/duː juː hæv ə drɛs koʊd/", vn: "Bạn có quy định ăn mặc không?" },
            { who: "B", s: "Casual attire is fine — no formal dress code.", ipa: "/ˈkæʒjʊəl əˈtaɪər ɪz faɪn nəʊ ˈfɔːrməl drɛs koʊd/", vn: "Ăn mặc bình thường là ổn — không có quy định trang phục nghiêm ngặt." }
        ]
    },

      // 131-133: Ordering Food - Parts 3,4,5
      {
            id: 131,
            title: "Ordering Food",
            turns: [
                  { who: "A", s: "I'd like to customize my burger; can I remove the onions?", ipa: "/aɪd laɪk tə ˈkʌstəmaɪz maɪ ˈbɜːrɡər kæn aɪ rɪˈmuːv ði ˈʌnjənz/", vn: "Tôi muốn tùy chỉnh burger; tôi có thể bỏ hành không?" },
                  { who: "B", s: "Sure, we can make that change for you.", ipa: "/ʃʊr wi kæn meɪk ðæt tʃeɪndʒ fər juː/", vn: "Chắc chắn, chúng tôi có thể thay đổi cho bạn." },
                  { who: "A", s: "Is delivery available to this address?", ipa: "/ɪz dɪˈlɪvəri əˈveɪləbl tə ðɪs əˈdrɛs/", vn: "Có giao đến địa chỉ này không?" },
                  { who: "B", s: "Yes, we deliver within a 5-mile radius.", ipa: "/jɛs wi dɪˈlɪvər wɪðɪn ə faɪv maɪl ˈreɪdiəs/", vn: "Có, chúng tôi giao trong bán kính 5 dặm." },
                  { who: "A", s: "Can I add extra toppings to my salad?", ipa: "/kæn aɪ æd ˈɛkstrə ˈtɒpɪŋz tə maɪ ˈsæləd/", vn: "Tôi có thể thêm topping cho salad không?" },
                  { who: "B", s: "Yes, extra toppings are an additional charge.", ipa: "/jɛs ˈɛkstrə ˈtɒpɪŋz ɑːr ən əˈdɪʃənəl tʃɑːrdʒ/", vn: "Có, thêm topping sẽ tính phí thêm." },
                  { who: "A", s: "What is your estimated delivery time?", ipa: "/wɒt ɪz jʊr ˈɛstɪmeɪtɪd dɪˈlɪvəri taɪm/", vn: "Thời gian giao hàng ước tính là bao lâu?" },
                  { who: "B", s: "About 30-45 minutes depending on traffic.", ipa: "/əˈbaʊt ˌθɜːrti fɔːrti faɪv ˈmɪnɪts dɪˈpɛndɪŋ ɒn ˈtræfɪk/", vn: "Khoảng 30-45 phút tuỳ giao thông." },
                  { who: "A", s: "Do you offer contactless delivery?", ipa: "/duː juː ˈɔːfər kənˈtæktləs dɪˈlɪvəri/", vn: "Bạn có giao hàng không tiếp xúc không?" },
                  { who: "B", s: "Yes, leave instructions and the driver will follow them.", ipa: "/jɛs liːv ɪnˈstrʌkʃənz ænd ðə ˈdraɪvər wɪl ˈfɒloʊ ðɛm/", vn: "Có, để lại hướng dẫn và tài xế sẽ làm theo." }
            ]
      },
      {
            id: 132,
            title: "Ordering Food",
            turns: [
                  { who: "A", s: "Can I change my order after it's been placed?", ipa: "/kæn aɪ tʃeɪndʒ maɪ ˈɔːrdər ˈæftər ɪts bɪn pleɪst/", vn: "Tôi có thể thay đổi đơn hàng sau khi đã đặt không?" },
                  { who: "B", s: "If the kitchen hasn't started, we can modify it.", ipa: "/ɪf ðə ˈkɪtʃən hæzənt stɑːrtəd wi kæn ˈmɒdɪfaɪ ɪt/", vn: "Nếu bếp chưa bắt đầu làm, chúng tôi có thể sửa đổi." },
                  { who: "A", s: "Do you charge for substitutions?", ipa: "/duː juː tʃɑːrdʒ fər ˌsʌbstɪˈtjuːʃənz/", vn: "Bạn có tính phí khi thay thế không?" },
                  { who: "B", s: "Minor substitutions are free; major changes may have a fee.", ipa: "/ˈmaɪnər ˌsʌbstɪˈtjuːʃənz ɑːr friː ˈmeɪdʒər tʃeɪndʒɪz meɪ hæv ə fiː/", vn: "Thay đổi nhỏ miễn phí; thay đổi lớn có thể tính phí." },
                  { who: "A", s: "Is there a minimum order for delivery?", ipa: "/ɪz ðɛr ə ˈmɪnɪməm ˈɔːrdər fər dɪˈlɪvəri/", vn: "Có đơn tối thiểu để giao không?" },
                  { who: "B", s: "Yes, $10 minimum for delivery orders.", ipa: "/jɛs tɛn ˈdɒl ərz ˈmɪnɪməm fər dɪˈlɪvəri ˈɔːrdərz/", vn: "Có, tối thiểu $10 cho đơn giao hàng." },
                  { who: "A", s: "Can I add special instructions for the chef?", ipa: "/kæn aɪ æd ˈspɛʃəl ɪnˈstrʌkʃənz fər ðə ʃɛf/", vn: "Tôi có thể thêm hướng dẫn đặc biệt cho đầu bếp không?" },
                  { who: "B", s: "Yes, include them in the notes section when ordering.", ipa: "/jɛs ɪnˈkluːd ðɛm ɪn ðə nəʊts ˈsɛkʃən wɛn ˈɔːrdərɪŋ/", vn: "Có, ghi chúng ở phần ghi chú khi đặt hàng." },
                  { who: "A", s: "Do you offer a loyalty discount on deliveries?", ipa: "/duː juː ˈɔːfər ə ˈlɔɪəlti dɪsˈkaʊnt ɒn dɪˈlɪvəriz/", vn: "Bạn có giảm giá cho đơn giao hàng cho thành viên không?" },
                  { who: "B", s: "Members get free delivery after five orders.", ipa: "/ˈmɛmbərz ɡɛt friː dɪˈlɪvəri ˈɑːftər faɪv ˈɔːrdərz/", vn: "Thành viên được giao miễn phí sau 5 đơn." }
            ]
      },
      {
            id: 133,
            title: "Ordering Food",
            turns: [
                  { who: "A", s: "What's the cancellation policy for delivery orders?", ipa: "/wɒts ðə ˌkænsəˈleɪʃən ˈpɒlɪsi fər dɪˈlɪvəri ˈɔːrdərz/", vn: "Chính sách hủy đơn giao hàng là gì?" },
                  { who: "B", s: "You can cancel within five minutes free of charge.", ipa: "/juː kæn ˈkænsəl wɪðɪn faɪv ˈmɪnɪts friː əv tʃɑːrdʒ/", vn: "Bạn có thể hủy trong vòng 5 phút miễn phí." },
                  { who: "A", s: "How do I tip the driver?", ipa: "/haʊ duː aɪ tɪp ðə ˈdraɪvər/", vn: "Tôi tip tài xế như thế nào?" },
                  { who: "B", s: "You can add a tip in the app or give cash to the driver.", ipa: "/juː kæn æd ə tɪp ɪn ði æp ɔːr ɡɪv kæʃ tə ðə ˈdraɪvər/", vn: "Bạn có thể thêm tiền tip trong app hoặc đưa tiền mặt cho tài xế." },
                  { who: "A", s: "Do you handle large catering orders?", ipa: "/duː juː ˈhændl lɑːrdʒ ˈkeɪtərɪŋ ˈɔːrdərz/", vn: "Bạn có nhận đặt tiệc lớn không?" },
                  { who: "B", s: "Yes, contact our catering team for quotes and lead times.", ipa: "/jɛs kənˈtækt aʊər ˈkeɪtərɪŋ tim fər kwoʊts ænd liːd taɪmz/", vn: "Có, liên hệ đội cung cấp tiệc để báo giá và thời gian chuẩn bị." },
                  { who: "A", s: "Is packaging eco-friendly?", ipa: "/ɪz ˈpækɪdʒɪŋ iːkoʊˈfrɛndli/", vn: "Bao bì có thân thiện với môi trường không?" },
                  { who: "B", s: "We use recyclable boxes and compostable cutlery where possible.", ipa: "/wi juz rɪˈsaɪkləbl bɒksɪz ænd kɒmˈpəʊstəbl ˈkʌtləri wɛər ˈpɒsəbəl/", vn: "Chúng tôi dùng hộp có thể tái chế và dụng cụ phân hủy được khi có thể." },
                  { who: "A", s: "Can I request a receipt emailed to me?", ipa: "/kæn aɪ rɪˈkwɛst ə rɪˈsiːt ˈiːmeɪld tə miː/", vn: "Tôi có thể yêu cầu gửi hóa đơn qua email không?" },
                  { who: "B", s: "Yes, provide your email and we'll send it after delivery.", ipa: "/jɛs prəˈvaɪd jʊr ˈiːmeɪl ænd wil sɛnd ɪt ˈɑːftər dɪˈlɪvəri/", vn: "Có, cho email và chúng tôi sẽ gửi sau khi giao." }
            ]
      }
,
// Extra Part 2 entries for more practice (ids 22+)
      // 22. Asking for Directions - Extra (duplicate titles will be merged at runtime)
      {
            id: 22,
            title: "Asking for Directions",
            turns: [
                  { who: "A", s: "Could you point me to the closest subway entrance?", ipa: "/kʊd juː pɔɪnt miː tə ðə ˈkloʊsɪst ˈsʌbweɪ ˈɛntrəns/", vn: "Bạn có thể chỉ cho tôi lối vào tàu điện ngầm gần nhất không?" },
                  { who: "B", s: "Walk two blocks then go down the stairs on your right.", ipa: "/wɔːk tuː blɑːks ðɛn ɡoʊ daʊn ðə stɛərz ɑn jʊr raɪt/", vn: "Đi hai dãy nhà rồi xuống cầu thang bên phải bạn." },
                  { who: "A", s: "Is there an entrance with an escalator?", ipa: "/ɪz ðɛr ən ˈɛntrəns wɪð ən ˈɛskəˌleɪtər/", vn: "Có lối vào có thang cuốn không?" },
                  { who: "B", s: "Yes, the main entrance has an escalator on the left.", ipa: "/jɛs ðə meɪn ˈɛntrəns hæz ən ˈɛskəˌleɪtər ɑn ðə lɛft/", vn: "Có, lối vào chính có thang cuốn ở bên trái." },
                  { who: "A", s: "Are there signs in English?", ipa: "/ɑːr ðɛr saɪnz ɪn ˈɪŋɡlɪʃ/", vn: "Có biển chỉ dẫn bằng tiếng Anh không?" },
                  { who: "B", s: "Yes, most signs are bilingual with English and Vietnamese.", ipa: "/jɛs moʊst saɪnz ɑːr ˈbaɪlɪŋɡwəl wɪð ˈɪŋɡlɪʃ ænd viɛtˈnɑːmiːz/", vn: "Có, hầu hết biển chỉ dẫn đều song ngữ Anh và Việt." },
                  { who: "A", s: "Thank you, that's very helpful.", ipa: "/ˈθæŋk juː ðæts ˈvɛri ˈhɛlpfl/", vn: "Cảm ơn, điều đó rất hữu ích." },
                  { who: "B", s: "No problem. Have a nice trip.", ipa: "/noʊ ˈprɒbləm hæv ə naɪs trɪp/", vn: "Không có gì. Chúc bạn đi tốt." },
                  { who: "A", s: "Can I use contactless cards on the subway?", ipa: "/kæn aɪ juz kənˈtæktləs kɑːrdz ɒn ðə ˈsʌbweɪ/", vn: "Tôi có thể dùng thẻ không chạm trên tàu điện ngầm không?" },
                  { who: "B", s: "Yes, tap your card or use a mobile ticket app.", ipa: "/jɛs tæp jʊr kɑːrd ɔːr juz ə ˈmoʊbəl ˈtɪkɪt æp/", vn: "Có, chạm thẻ hoặc dùng ứng dụng vé trên điện thoại." }
            ]
      }
      ,
      // 23. At the Airport - Part 2
      {
            id: 23,
            title: "At the Airport",
            turns: [
                  { who: "A", s: "Where can I drop my luggage?", ipa: "/wɛr kæn aɪ drɑp maɪ ˈlʌɡɪdʒ/", vn: "Tôi có thể gửi hành lý ở đâu?" },
                  { who: "B", s: "There is a left-luggage counter near Gate 4.", ipa: "/ðɛr ɪz ə lɛft-ˈlʌɡɪdʒ ˈkaʊntər nɪər ɡeɪt fɔːr/", vn: "Có quầy giữ hành lý ở gần Cửa 4." },
                  { who: "A", s: "How long can I leave it there?", ipa: "/haʊ lɔːŋ kæn aɪ liːv ɪt ðɛr/", vn: "Tôi có thể để nó ở đó bao lâu?" },
                  { who: "B", s: "You can store it up to seven days for a small fee.", ipa: "/juː kæn stɔːr ɪt ʌp tə ˈsɛvən deɪz fər ə smɔːl fiː/", vn: "Bạn có thể gửi tối đa bảy ngày với một khoản phí nhỏ." },
                  { who: "A", s: "Do you need ID to leave items?", ipa: "/duː juː niːd aɪˈdiː tə liːv ˈaɪtəmz/", vn: "Bạn có cần giấy tờ để gửi hành lý không?" },
                  { who: "B", s: "Yes, please show your boarding pass or passport.", ipa: "/jɛs pliz ʃoʊ jʊr ˈbɔːrdɪŋ pæs ɔːr ˈpæspɔːrt/", vn: "Vâng, làm ơn xuất trình thẻ lên máy bay hoặc hộ chiếu." },
                  { who: "A", s: "Is there a secure locker option?", ipa: "/ɪz ðɛr ə sɪˈkjʊr ˈlɒkər ˈɒpʃən/", vn: "Có tùy chọn tủ khóa an toàn không?" },
                  { who: "B", s: "Yes, lockers are available for hourly rates.", ipa: "/jɛs ˈlɒkərz ɑːr əˈveɪləbl fər ˈaʊərli reɪts/", vn: "Có, có tủ khóa với mức phí theo giờ." },
                  { who: "A", s: "Can I pick it up after my flight?", ipa: "/kæn aɪ pɪk ɪt ʌp ˈæftər maɪ flaɪt/", vn: "Tôi có thể nhận lại sau chuyến bay không?" },
                  { who: "B", s: "Yes, just keep your receipt and return within the storage period.", ipa: "/jɛs dʒʌst kip jʊr rɪˈsiːt ænd rɪˈtɜːrn wɪðɪn ðə ˈstɔːrɪdʒ ˈpɪəriəd/", vn: "Vâng, giữ lại biên nhận và quay lại trong thời gian lưu trữ." }
            ]
      }
      ,
      // 24. At the Bank - Part 2
      {
            id: 24,
            title: "At the Bank",
            turns: [
                  { who: "A", s: "Can I withdraw cash from my account?", ipa: "/kæn aɪ wɪðˈdrɔː kæʃ frəm maɪ əˈkaʊnt/", vn: "Tôi có thể rút tiền mặt từ tài khoản của mình không?" },
                  { who: "B", s: "Yes, please insert your card and enter your PIN.", ipa: "/jɛs pliz ɪnˈsɜːrt jʊr kɑːrd ænd ˈɛntər jʊr pɪn/", vn: "Vâng, hãy cho thẻ vào và nhập mã PIN." },
                  { who: "A", s: "I'd like to set up automatic bill payments.", ipa: "/aɪd laɪk tə sɛt ʌp ˌɔːtəˈmætɪk bɪl ˈpeɪmənts/", vn: "Tôi muốn thiết lập thanh toán hóa đơn tự động." },
                  { who: "B", s: "We can arrange that. Which bills will you pay?", ipa: "/wi kæn əˈreɪndʒ ðæt wɪtʃ bɪlz wɪl juː peɪ/", vn: "Chúng tôi có thể sắp xếp. Bạn muốn trả hóa đơn nào?" },
                  { who: "A", s: "Electricity and internet monthly.", ipa: "/ɪˌlɛkˈtrɪsəti ænd ˈɪntərnɛt ˈmʌnθli/", vn: "Điện và internet hàng tháng." },
                  { who: "B", s: "We'll need your account numbers for those services.", ipa: "/wil niːd jʊr əˈkaʊnt ˈnʌmbərz fər ðoʊz ˈsɜːrvɪsɪz/", vn: "Chúng tôi cần số tài khoản cho các dịch vụ đó." },
                  { who: "A", s: "Can I increase my withdrawal limit?", ipa: "/kæn aɪ ɪnˈkriːs maɪ wɪðˈdrɔː ˈlɪmɪt/", vn: "Tôi có thể tăng hạn mức rút tiền không?" },
                  { who: "B", s: "Yes, after verifying your ID and account history.", ipa: "/jɛs ˈæftər ˈvɛrɪfaɪɪŋ jʊr aɪˈdiː ænd əˈkaʊnt ˈhɪstəri/", vn: "Có, sau khi xác minh ID và lịch sử tài khoản." },
                  { who: "A", s: "Do you offer travel notifications for cards?", ipa: "/duː juː ˈɔːfər ˈtrævəl ˌnoʊtɪfɪˈkeɪʃənz fər kɑːrdz/", vn: "Bạn có cung cấp thông báo đi lại cho thẻ không?" },
                  { who: "B", s: "Yes, you can set travel dates online or at the desk.", ipa: "/jɛs juː kæn sɛt ˈtrævəl deɪts ˈɒnlaɪn ɔːr æt ðə dɛsk/", vn: "Có, bạn có thể đặt ngày đi lại trực tuyến hoặc tại quầy." }
            ]
      }
      ,
      // 25. At the Doctor's Office - Part 2
      {
            id: 25,
            title: "At the Doctor's Office",
            turns: [
                  { who: "A", s: "I've been feeling dizzy sometimes.", ipa: "/aɪv bɪn ˈfiːlɪŋ ˈdɪzi ˈsʌmtaɪmz/", vn: "Tôi đôi khi cảm thấy chóng mặt." },
                  { who: "B", s: "Do you have any other symptoms?", ipa: "/duː juː hæv ˈɛni ˈʌðər ˈsɪmptəmz/", vn: "Bạn có triệu chứng nào khác không?" },
                  { who: "A", s: "Just some nausea and slight fever.", ipa: "/dʒʌst sʌm ˈneɪziə ænd slaɪt ˈfiːvər/", vn: "Chỉ hơi buồn nôn và sốt nhẹ." },
                  { who: "B", s: "We'll run a few tests to be sure.", ipa: "/wil rʌn ə fjuː tɛsts tə bi ʃʊr/", vn: "Chúng tôi sẽ làm vài xét nghiệm để chắc chắn." },
                  { who: "A", s: "Should I stop taking any vitamins?", ipa: "/ʃʊd aɪ stɒp ˈteɪkɪŋ ˈɛni ˈvaɪtəmɪnz/", vn: "Tôi có nên dừng uống vitamin không?" },
                  { who: "B", s: "No, continue unless we advise otherwise.", ipa: "/noʊ kənˈtɪnjuː ənˈlɛs wi ədˈvaɪz ˈʌðərwaɪz/", vn: "Không, hãy tiếp tục trừ khi chúng tôi khuyên khác." },
                  { who: "A", s: "Do I need to come back for results?", ipa: "/duː aɪ niːd tə kʌm bæk fər rɪˈzʌlts/", vn: "Tôi có cần quay lại để lấy kết quả không?" },
                  { who: "B", s: "We'll call you when the tests are ready.", ipa: "/wil kɔːl juː wɛn ðə tɛsts ɑːr ˈrɛdi/", vn: "Chúng tôi sẽ gọi cho bạn khi có kết quả." },
                  { who: "A", s: "Is there anything I should avoid eating?", ipa: "/ɪz ðɛr ˈɛniθɪŋ aɪ ʃʊd əˈvɔɪd ˈiːtɪŋ/", vn: "Có điều gì tôi nên tránh ăn không?" },
                  { who: "B", s: "Avoid alcohol and heavy meals until you recover.", ipa: "/əˈvɔɪd ˈælkəhɒl ænd ˈhɛvi milz ʌnˈtɪl juː rɪˈkʌvər/", vn: "Tránh rượu và bữa ăn quá nặng cho đến khi bạn phục hồi." }
            ]
      }
      ,
      // 26. At the Gym - Part 2
      {
            id: 26,
            title: "At the Gym",
            turns: [
                  { who: "A", s: "Do you offer personal training?", ipa: "/duː juː ˈɔːfər ˈpɜːrsənəl ˈtreɪnɪŋ/", vn: "Bạn có cung cấp huấn luyện cá nhân không?" },
                  { who: "B", s: "Yes, we have trainers available by appointment.", ipa: "/jɛs wi hæv ˈtreɪnərz əˈveɪləbl baɪ əˈpɔɪntmənt/", vn: "Vâng, chúng tôi có huấn luyện viên theo lịch hẹn." },
                  { who: "A", s: "How much does a session cost?", ipa: "/haʊ mʌtʃ dʌz ə ˈsɛʃən kɔːst/", vn: "Một buổi huấn luyện giá bao nhiêu?" },
                  { who: "B", s: "Thirty dollars for a one-hour session.", ipa: "/ˈθɜːrti ˈdɑːlərz fər ə wʌn aʊər ˈsɛʃən/", vn: "Ba mươi đô cho một buổi một giờ." },
                  { who: "A", s: "Do you have a class schedule?", ipa: "/duː juː hæv ə klɑːs ˈskɛdjuːl/", vn: "Bạn có lịch lớp không?" },
                  { who: "B", s: "Yes, classes run every hour from 6 AM to 8 PM.", ipa: "/jɛs klæsɪz rʌn ˈɛvri ˈaʊər frəm sɪks eɪˈɛm tə eɪt piː ˈɛm/", vn: "Có, các lớp diễn ra mỗi giờ từ 6h sáng đến 8h tối." },
                  { who: "A", s: "Is there a beginners' class?", ipa: "/ɪz ðɛr ə bɪˈɡɪnərz klɑːs/", vn: "Có lớp cho người mới bắt đầu không?" },
                  { who: "B", s: "Yes, beginner sessions are at 7 AM and 6 PM.", ipa: "/jɛs bɪˈɡɪnər ˈsɛʃənz ɑːr æt sɛvən eɪˈɛm ænd sɪks piː ˈɛm/", vn: "Có, lớp cho người mới vào 7h sáng và 6h chiều." },
                  { who: "A", s: "Can I get a membership discount?", ipa: "/kæn aɪ ɡɛt ə ˈmɛmbərʃɪp dɪsˈkaʊnt/", vn: "Tôi có được giảm giá thành viên không?" },
                  { who: "B", s: "Yes, students get 10% off with ID.", ipa: "/jɛs ˈstjuːdənts ɡɛt tɛn pərˈsɛnt ɒf wɪð aɪˈdiː/", vn: "Có, sinh viên được giảm 10% khi có thẻ." }
            ]
      }
      ,
      // 27. At the Hotel Reception - Part 2
      {
            id: 27,
            title: "At the Hotel Reception",
            turns: [
                  { who: "A", s: "Can I leave my bags here after check-out?", ipa: "/kæn aɪ liːv maɪ bæɡz hɪər ˈæftər tʃɛk aʊt/", vn: "Tôi có thể gửi túi ở đây sau khi trả phòng không?" },
                  { who: "B", s: "Yes, we offer luggage storage for guests.", ipa: "/jɛs wi ˈɔːfər ˈlʌɡɪdʒ ˈstɔːrɪdʒ fər ɡɛsts/", vn: "Vâng, khách có thể gửi hành lý." },
                  { who: "A", s: "Is there a place to charge my phone?", ipa: "/ɪz ðɛr ə pleɪs tə tʃɑːrdʒ maɪ foʊn/", vn: "Có chỗ để sạc điện thoại không?" },
                  { who: "B", s: "Yes, we have a charging station at the front desk.", ipa: "/jɛs wi hæv ə ˈtʃɑːrdʒɪŋ ˈsteɪʃən æt ðə frʌnt dɛsk/", vn: "Có, chúng tôi có trạm sạc ở quầy tiếp tân." },
                  { who: "A", s: "Can I request a late checkout?", ipa: "/kæn aɪ rɪˈkwɛst ə leɪt tʃɛk aʊt/", vn: "Tôi có thể xin trả phòng muộn không?" },
                  { who: "B", s: "We can arrange late checkout for an extra fee.", ipa: "/wi kæn əˈreɪndʒ leɪt tʃɛk aʊt fər ən ˈɛkstrə fiː/", vn: "Chúng tôi có thể sắp xếp trả phòng muộn với phí thêm." },
                  { who: "A", s: "Is the Wi-Fi included?", ipa: "/ɪz ðə waɪ faɪ ɪnˈkluːdɪd/", vn: "Wi-Fi có bao gồm không?" },
                  { who: "B", s: "Yes, complimentary Wi-Fi is available in all rooms.", ipa: "/jɛs kəmˈplɪməntəri waɪ faɪ ɪz əˈveɪləbl ɪn ɔːl ruːmz/", vn: "Có, Wi-Fi miễn phí có ở tất cả các phòng." },
                  { who: "A", s: "Can you recommend a good local restaurant?", ipa: "/kæn juː ˌrɛkəˈmɛnd ə ɡʊd ˈloʊkəl ˈrɛstərənt/", vn: "Bạn có thể giới thiệu nhà hàng địa phương nào ngon không?" },
                  { who: "B", s: "Yes, try 'Ocean Bistro' two blocks away; it's popular.", ipa: "/jɛs traɪ ˈoʊʃən ˈbɪstroʊ tuː blɑːks əˈweɪ ɪts ˈpɒpjələr/", vn: "Có, thử 'Ocean Bistro' cách hai dãy nhà; rất được ưa chuộng." }
            ]
      }
      ,
      // 28. At the Library - Part 2
      {
            id: 28,
            title: "At the Library",
            turns: [
                  { who: "A", s: "Do you have any study rooms available?", ipa: "/duː juː hæv ˈɛni ˈstʌdi rumz əˈveɪləbl/", vn: "Bạn có phòng học nhóm nào không?" },
                  { who: "B", s: "Yes, they can be booked online or at the desk.", ipa: "/jɛs ðeɪ kæn bi bʊkt ˈɒnˌlaɪn ɔːr æt ðə dɛsk/", vn: "Có, bạn có thể đặt trực tuyến hoặc tại quầy." },
                  { who: "A", s: "How long is the booking period?", ipa: "/haʊ lɔːŋ ɪz ðə ˈbʊkɪŋ ˈpɪriəd/", vn: "Thời gian đặt là bao lâu?" },
                  { who: "B", s: "Usually two hours per booking.", ipa: "/ˈjuːʒəli tuː aʊərz pər ˈbʊkɪŋ/", vn: "Thường là hai tiếng cho mỗi lần đặt." },
                  { who: "A", s: "Are there quiet zones for reading?", ipa: "/ɑːr ðɛr kwaɪət zoʊnz fər ˈriːdɪŋ/", vn: "Có khu vực yên tĩnh để đọc sách không?" },
                  { who: "B", s: "Yes, floors two and three are quiet study areas.", ipa: "/jɛs flɔːrz tuː ænd θriː ɑːr kwaɪət ˈstʌdi ˈɛriəz/", vn: "Có, tầng hai và ba là khu vực học yên tĩnh." },
                  { who: "A", s: "Can I renew my loan online?", ipa: "/kæn aɪ rɪˈnjuː maɪ loʊn ˈɒnlaɪn/", vn: "Tôi có thể gia hạn mượn sách trực tuyến không?" },
                  { who: "B", s: "Yes, log in to your account and choose renew.", ipa: "/jɛs lɔːɡ ɪn tə jʊr əˈkaʊnt ænd tʃuːz rɪˈnjuː/", vn: "Có, đăng nhập vào tài khoản và chọn gia hạn." },
                  { who: "A", s: "Do you have children's books?", ipa: "/duː juː hæv ˈtʃɪldrənz bʊks/", vn: "Bạn có sách cho trẻ em không?" },
                  { who: "B", s: "Yes, the children's section is on the ground floor.", ipa: "/jɛs ðə ˈtʃɪldrənz ˈsɛkʃən ɪz ɒn ðə graʊnd flɔːr/", vn: "Có, khu sách thiếu nhi ở tầng trệt." }
            ]
      }
      ,
      // 29. At the Post Office - Part 2
      {
            id: 29,
            title: "At the Post Office",
            turns: [
                  { who: "A", s: "Do you sell passport photos here?", ipa: "/duː juː sɛl ˈpæspɔːrt ˈfoʊtoʊz hɪər/", vn: "Bạn có chụp ảnh hộ chiếu ở đây không?" },
                  { who: "B", s: "Yes, and we can process visa forms too.", ipa: "/jɛs ænd wi kæn ˈproʊsɛs ˈviːzə fɔrmz tuː/", vn: "Có, và chúng tôi cũng có thể xử lý đơn xin visa." },
                  { who: "A", s: "How long for express delivery?", ipa: "/haʊ lɔːŋ fər ɪkˈsprɛs dɪˈlɪvəri/", vn: "Giao hàng nhanh mất bao lâu?" },
                  { who: "B", s: "Usually 2-3 business days.", ipa: "/ˈjuːʒəli tuː θriː ˈbɪznəs deɪz/", vn: "Thường là 2-3 ngày làm việc." },
                  { who: "A", s: "Do you offer registered mail?", ipa: "/duː juː ˈɔːfər rɛdʒɪstərd meɪl/", vn: "Bạn có dịch vụ gửi bảo đảm không?" },
                  { who: "B", s: "Yes, registered mail includes tracking and signature.", ipa: "/jɛs rɛdʒɪstərd meɪl ɪnˈkluːdz ˈtrækɪŋ ænd ˈsɪɡnətʃər/", vn: "Có, gửi bảo đảm có theo dõi và ký nhận." },
                  { who: "A", s: "Can I insure the parcel?", ipa: "/kæn aɪ ɪnˈʃʊər ðə ˈpɑːrsəl/", vn: "Tôi có thể mua bảo hiểm cho bưu kiện không?" },
                  { who: "B", s: "Yes, insurance options are available at the counter.", ipa: "/jɛs ɪnˈʃʊərəns ˈɒpʃənz ɑːr əˈveɪləbl æt ðə ˈkaʊntər/", vn: "Có, có tùy chọn bảo hiểm tại quầy." },
                  { who: "A", s: "What's the price for registered mail?", ipa: "/wɒts ðə praɪs fər rɛdʒɪstərd meɪl/", vn: "Giá gửi bảo đảm là bao nhiêu?" },
                  { who: "B", s: "It depends on weight and destination; we can calculate it now.", ipa: "/ɪt dɪˈpɛndz ɒn weɪt ænd ˌdɛstɪˈneɪʃən wi kæn ˈkælkjəleɪt ɪt naʊ/", vn: "Tùy thuộc vào trọng lượng và điểm đến; chúng tôi có thể tính ngay." }
            ]
      }
      ,
      // 30. At the Restaurant - Part 2
      {
            id: 30,
            title: "At the Restaurant",
            turns: [
                  { who: "A", s: "Do you have a vegetarian option?", ipa: "/duː juː hæv ə ˌvɛdʒəˈtɛriən ˈɒpʃən/", vn: "Bạn có món chay không?" },
                  { who: "B", s: "Yes, our vegetable pasta is popular.", ipa: "/jɛs aʊər ˈvɛdʒtəbəl ˈpæstə ɪz ˈpɒpjələr/", vn: "Có, mì ý rau củ của chúng tôi rất được ưa chuộng." },
                  { who: "A", s: "Can I get the bill, please?", ipa: "/kæn aɪ ɡɛt ðə bɪl pliz/", vn: "Cho tôi xin hóa đơn, làm ơn." },
                  { who: "B", s: "Of course. I'll bring it right away.", ipa: "/əv kɔːrs aɪl brɪŋ ɪt raɪt əˈweɪ/", vn: "Tất nhiên. Tôi sẽ mang ngay." },
                  { who: "A", s: "Do you accept reservations for large groups?", ipa: "/duː juː ækˈsɛpt ˌrɛzərˈveɪʃənz fər lɑːrdʒ ɡruːps/", vn: "Bạn có nhận đặt trước cho nhóm lớn không?" },
                  { who: "B", s: "Yes, please call ahead for parties over six.", ipa: "/jɛs pliz kɔːl əˈhɛd fər ˈpɑːrtiz ˈoʊvər sɪks/", vn: "Có, vui lòng gọi trước cho nhóm trên sáu người." },
                  { who: "A", s: "Can I pay separately?", ipa: "/kæn aɪ peɪ ˈsɛprətli/", vn: "Tôi có thể thanh toán riêng không?" },
                  { who: "B", s: "Yes, we can split the bill at the register.", ipa: "/jɛs wi kæn splɪt ðə bɪl æt ðə ˈrɛdʒɪstər/", vn: "Có, chúng tôi có thể tách hóa đơn tại quầy." },
                  { who: "A", s: "Do you have gluten-free options?", ipa: "/duː juː hæv ˈɡluːtən friː ˈɒpʃənz/", vn: "Bạn có món không gluten không?" },
                  { who: "B", s: "Yes, several dishes can be made gluten-free.", ipa: "/jɛs ˈsɛvərəl dɪʃɪz kæn bi meɪd ˈɡluːtən friː/", vn: "Có, một số món có thể làm không gluten." }
            ]
      }
      ,
      // 31. At the Supermarket - Part 2
      {
            id: 31,
            title: "At the Supermarket",
            turns: [
                  { who: "A", s: "Do you have organic fruits?", ipa: "/duː juː hæv ɔːrˈɡænɪk fruːts/", vn: "Bạn có trái cây hữu cơ không?" },
                  { who: "B", s: "Yes, they are in the produce section.", ipa: "/jɛs ðeɪ ɑːr ɪn ðə ˈprɒdjuːs ˈsɛkʃən/", vn: "Có, chúng ở khu sản phẩm tươi." },
                  { who: "A", s: "Do you accept card payments?", ipa: "/duː juː ækˈsɛpt kɑːrd ˈpeɪmənts/", vn: "Bạn có chấp nhận thẻ không?" },
                  { who: "B", s: "Yes, Visa and MasterCard are accepted.", ipa: "/jɛs ˈviːzə ænd ˈmæstərkɑːrd ɑːr ækˈsɛptɪd/", vn: "Có, chấp nhận Visa và MasterCard." },
                  { who: "A", s: "Are there discounts for loyalty members?", ipa: "/ɑːr ðɛr dɪsˈkaʊnts fər ˈlɔɪəlti ˈmɛmbərz/", vn: "Có giảm giá cho thành viên thân thiết không?" },
                  { who: "B", s: "Yes, members get 5% off on selected items.", ipa: "/jɛs ˈmɛmbərz ɡɛt fɪv pərˈsɛnt ɒf ɒn səˈlɛktɪd ˈaɪtəmz/", vn: "Có, thành viên được giảm 5% cho một số mặt hàng." },
                  { who: "A", s: "Where is the deli counter?", ipa: "/wɛr ɪz ðə ˈdɛli ˈkaʊntər/", vn: "Quầy thực phẩm sẵn sàng ở đâu?" },
                  { who: "B", s: "The deli is to the right of the bakery, near the back.", ipa: "/ðə ˈdɛli ɪz tə ðə raɪt əv ðə ˈbeɪkəri nɪər ðə bæk/", vn: "Quầy deli bên phải khu bánh, gần phía sau." },
                  { who: "A", s: "Do you have a rewards app?", ipa: "/duː juː hæv ə rɪˈwɔːrdz æp/", vn: "Bạn có ứng dụng tích điểm không?" },
                  { who: "B", s: "Yes, download our app and scan at checkout.", ipa: "/jɛs daʊnˈloʊd aʊər æp ænd skæn æt ˈtʃɛkaʊt/", vn: "Có, tải ứng dụng và quét khi thanh toán." }
            ]
      }
      ,
      // 32. Booking a Hotel Room - Part 2
      {
            id: 32,
            title: "Booking a Hotel Room",
            turns: [
                  { who: "A", s: "Is breakfast included with this rate?", ipa: "/ɪz ˈbrɛkfəst ɪnˈkluːdɪd wɪð ðɪs reɪt/", vn: "Bữa sáng có bao gồm trong giá này không?" },
                  { who: "B", s: "Yes, continental breakfast is included.", ipa: "/jɛs ˌkɒntɪˈnɛntl ˈbrɛkfəst ɪz ɪnˈkluːdɪd/", vn: "Có, bữa sáng kiểu lục địa được bao gồm." },
                  { who: "A", s: "Can I request a late check-out?", ipa: "/kæn aɪ rɪˈkwɛst ə leɪt tʃɛk aʊt/", vn: "Tôi có thể xin trả phòng muộn không?" },
                  { who: "B", s: "We can arrange that for an extra fee.", ipa: "/wi kæn əˈreɪndʒ ðæt fər ən ˈɛkstrə fiː/", vn: "Chúng tôi có thể sắp xếp với một khoản phí thêm." },
                  { who: "A", s: "Do you have rooms with a view?", ipa: "/duː juː hæv ruːmz wɪð ə vjuː/", vn: "Bạn có phòng nhìn ra cảnh không?" },
                  { who: "B", s: "Yes, we can upgrade you for a small fee if available.", ipa: "/jɛs wi kæn ʌpˈɡreɪd juː fər ə smɔːl fiː ɪf əˈveɪləbl/", vn: "Có, chúng tôi có thể nâng cấp bạn với phí nhỏ nếu còn phòng." },
                  { who: "A", s: "Is parking included?", ipa: "/ɪz ˈpɑːrkɪŋ ɪnˈkluːdɪd/", vn: "Có bao gồm chỗ đậu xe không?" },
                  { who: "B", s: "We offer valet parking for $15 per night.", ipa: "/wi ˈɔːfər ˈvæleɪ ˈpɑːrkɪŋ fər fɪfˈtiːn pər naɪt/", vn: "Chúng tôi có dịch vụ trông xe giá 15 đô một đêm." },
                  { who: "A", s: "Do you have a gym and pool?", ipa: "/duː juː hæv ə dʒɪm ænd puːl/", vn: "Bạn có phòng gym và bể bơi không?" },
                  { who: "B", s: "Yes, both are complimentary for guests.", ipa: "/jɛs boʊθ ɑːr kəmˈplɪməntəri fər ɡɛsts/", vn: "Có, cả hai đều miễn phí cho khách." }
            ]
      }
      ,
      // 33. Buying Bus Tickets - Part 2
      {
            id: 33,
            title: "Buying Bus Tickets",
            turns: [
                  { who: "A", s: "Do you offer day passes?", ipa: "/duː juː ˈɔːfər deɪ pæsɪz/", vn: "Bạn có bán vé ngày không?" },
                  { who: "B", s: "Yes, a day pass is ten dollars.", ipa: "/jɛs ə deɪ pæs ɪz tɛn ˈdɑːlərz/", vn: "Có, vé ngày là 10 đô la." },
                  { who: "A", s: "Can I use contactless payment?", ipa: "/kæn aɪ juz ˈkɒntæktləs ˈpeɪmənt/", vn: "Tôi có thể thanh toán không tiếp xúc không?" },
                  { who: "B", s: "Yes, contactless is supported on most buses.", ipa: "/jɛs kənˈtæktləs ɪz səˈpɔːrtəd ɒn moʊst bʌsɪz/", vn: "Có, hầu hết xe buýt hỗ trợ thanh toán không tiếp xúc." },
                  { who: "A", s: "Are there reduced fares for seniors?", ipa: "/ɑːr ðɛr rɪˈdjuːst fɛərz fər ˈsiːniərz/", vn: "Có vé giảm cho người cao tuổi không?" },
                  { who: "B", s: "Yes, seniors get a discounted fare with ID.", ipa: "/jɛs ˈsiːniərz ɡɛt ə dɪsˈkaʊntɪd fɛər wɪð aɪˈdiː/", vn: "Có, người cao tuổi được giảm giá khi có giấy tờ." },
                  { who: "A", s: "Can I top up my travel card here?", ipa: "/kæn aɪ tɒp ʌp maɪ ˈtrævəl kɑːrd hɪər/", vn: "Tôi có thể nạp thẻ giao thông ở đây không?" },
                  { who: "B", s: "Yes, visit the ticket machine or service desk.", ipa: "/jɛs ˈvɪzɪt ðə ˈtɪkɪt məˌʃiːn ɔːr ˈsɜːrvɪs dɛsk/", vn: "Có, đến máy bán vé hoặc quầy dịch vụ." },
                  { who: "A", s: "Is the timetable available online?", ipa: "/ɪz ðə ˈtaɪmteɪbəl əˈveɪləbl ˈɒnlaɪn/", vn: "Bảng giờ có trên mạng không?" },
                  { who: "B", s: "Yes, check the transport authority website for schedules.", ipa: "/jɛs tʃɛk ðə ˈtrænspɔːrt əˈθɒrɪti ˈwɛbsaɪt fər ˈskɛdjuːlz/", vn: "Có, kiểm tra trang web cơ quan giao thông để biết lịch trình." }
            ]
      }
      ,
      // 34. Meeting a Friend - Part 2
      {
            id: 34,
            title: "Meeting a Friend",
            turns: [
                  { who: "A", s: "Want to grab coffee after class?", ipa: "/wɑːnt tə ɡræb ˈkɒfi ˈæftər klæs/", vn: "Muốn đi uống cà phê sau giờ học không?" },
                  { who: "B", s: "Sure, what time works for you?", ipa: "/ʃʊr wʌt taɪm wɜːrks fər juː/", vn: "Chắc chắn, mấy giờ phù hợp với bạn?" },
                  { who: "A", s: "Let's meet at 5 PM at the cafe nearby.", ipa: "/lɛts miːt æt faɪv piː ˈɛm æt ðə ˈkæfeɪ nɪərbaɪ/", vn: "Gặp nhau lúc 5 giờ chiều ở quán cà phê gần đó." },
                  { who: "B", s: "Sounds good. See you then.", ipa: "/saʊndz ɡʊd siː juː ðɛn/", vn: "Nghe tốt. Hẹn gặp lại." },
                  { who: "A", s: "Do you want to invite Sarah too?", ipa: "/duː juː wɒnt tə ɪnˈvaɪt ˈsærə tuː/", vn: "Bạn có muốn mời Sarah không?" },
                  { who: "B", s: "Yes, text her and I'll confirm.", ipa: "/jɛs tɛkst hɜːr ænd aɪl kənˈfɜːrm/", vn: "Có, nhắn tin cho cô ấy và tôi sẽ xác nhận." },
                  { who: "A", s: "Should we bring a board game?", ipa: "/ʃʊd wiː brɪŋ ə bɔːrd ɡeɪm/", vn: "Chúng ta có nên mang trò chơi board không?" },
                  { who: "B", s: "Maybe something quick like Uno.", ipa: "/ˈmeɪbi ˈsʌmθɪŋ kwɪk laɪk ˈjuːnoʊ/", vn: "Có thể là cái gì đó nhanh như Uno." },
                  { who: "A", s: "Do you want to meet earlier to study?", ipa: "/duː juː wɒnt tə miːt ˈɜːrliər tə ˈstʌdi/", vn: "Bạn có muốn gặp sớm hơn để học không?" },
                  { who: "B", s: "Yes, let's meet at 4:30 and review notes.", ipa: "/jɛs lɛts miːt æt fɔːr ˈθɜːrti ænd rɪˈvjuː nəʊts/", vn: "Có, gặp lúc 4:30 và ôn ghi chú." }
            ]
      }
      ,
      // 35. Ordering Food - Part 2
      {
            id: 35,
            title: "Ordering Food",
            turns: [
                  { who: "A", s: "Can I get this to go?", ipa: "/kæn aɪ ɡɛt ðɪs tə ɡoʊ/", vn: "Tôi có thể lấy mang về không?" },
                  { who: "B", s: "Yes, would you like utensils?", ipa: "/jɛs wʊd juː laɪk ˈjuːtənzɪlz/", vn: "Có, bạn có muốn dụng cụ ăn không?" },
                  { who: "A", s: "No thanks, just a napkin please.", ipa: "/noʊ θæŋks dʒʌst ə ˈnæpkɪn pliz/", vn: "Không, cảm ơn, cho tôi một cái khăn giấy." },
                  { who: "B", s: "Your order will be ready in 10 minutes.", ipa: "/jʊr ˈɔːrdər wɪl bi ˈrɛdi ɪn tɛn ˈmɪnɪts/", vn: "Đơn hàng của bạn sẽ sẵn sàng sau 10 phút." },
                  { who: "A", s: "Can I add an extra sauce?", ipa: "/kæn aɪ æd æn ˈɛkstrə sɔːs/", vn: "Tôi có thể thêm sốt không?" },
                  { who: "B", s: "Yes, extra sauce is $0.50.", ipa: "/jɛs ˈɛkstrə sɔːs ɪz plʌs faɪfti sɛnts/", vn: "Có, thêm sốt là 0.50 đô." },
                  { who: "A", s: "Do you have spicy sauce?", ipa: "/duː juː hæv ˈspaɪsi sɔːs/", vn: "Có sốt cay không?" },
                  { who: "B", s: "Yes, we have chili and sriracha.", ipa: "/jɛs wi hæv ˈtʃɪli ænd sɪˈrɑːtʃə/", vn: "Có, chúng tôi có ớt và sriracha." },
                  { who: "A", s: "Can I change the pickup time?", ipa: "/kæn aɪ tʃeɪndʒ ðə ˈpɪkʌp taɪm/", vn: "Tôi có thể thay đổi thời gian nhận không?" },
                  { who: "B", s: "Sure, tell us when you'd like to pick it up.", ipa: "/ʃʊr tɛl ʌs wɛn jud laɪk tə pɪk ɪt ʌp/", vn: "Được, cho chúng tôi biết khi nào bạn muốn nhận." }
            ]
      }
      ,
      // 36. Shopping for Clothes - Part 2
      {
            id: 36,
            title: "Shopping for Clothes",
            turns: [
                  { who: "A", s: "Do you have this in a different color?", ipa: "/duː juː hæv ðɪs ɪn ə ˈdɪfrənt ˈkʌlər/", vn: "Bạn có mẫu này màu khác không?" },
                  { who: "B", s: "Yes, we have it in blue and black.", ipa: "/jɛs wi hæv ɪt ɪn bluː ænd blæk/", vn: "Có, chúng tôi có màu xanh và đen." },
                  { who: "A", s: "Can I return it if it doesn't fit?", ipa: "/kæn aɪ rɪˈtɜːrn ɪt ɪf ɪt dʌzənt fɪt/", vn: "Tôi có thể trả lại nếu nó không vừa không?" },
                  { who: "B", s: "Yes, within 14 days with receipt.", ipa: "/jɛs wɪðˈɪn fɔːrˈtiːn deɪz wɪð rɪˈsiːt/", vn: "Có, trong vòng 14 ngày với hóa đơn." },
                  { who: "A", s: "Do you offer alterations?", ipa: "/duː juː ˈɔːfər ˌɔːltəˈreɪʃənz/", vn: "Bạn có nhận chỉnh sửa không?" },
                  { who: "B", s: "Yes, tailor services are available for a fee.", ipa: "/jɛs ˈteɪlər ˈsɜːrvɪsɪz ɑːr əˈveɪləbl fər ə fiː/", vn: "Có, có dịch vụ may chỉnh với phí." },
                  { who: "A", s: "Is there a sale this week?", ipa: "/ɪz ðɛr ə seɪl ðɪs wiːk/", vn: "Tuần này có giảm giá không?" },
                  { who: "B", s: "Yes, 20% off outerwear until Sunday.", ipa: "/jɛs ˈtwɛnti pərˈsɛnt ɒf ˈaʊtərˌwɛr ʌnˈtɪl ˈsʌndeɪ/", vn: "Có, giảm 20% áo khoác đến Chủ nhật." },
                  { who: "A", s: "Do you have a loyalty program?", ipa: "/duː juː hæv ə ˈlɔɪəlti ˈproʊɡræm/", vn: "Bạn có chương trình khách hàng thân thiết không?" },
                  { who: "B", s: "Yes, sign up for points and member discounts.", ipa: "/jɛs saɪn ʌp fər pɔɪnts ænd ˈmɛmbər dɪsˈkaʊnts/", vn: "Có, đăng ký để nhận điểm và ưu đãi thành viên." }
            ]
      }
      ,
      // 37. Making a Phone Call - Part 2

      // 125-127: Shopping for Clothes - Parts 3,4,5
      {
            id: 125,
            title: "Shopping for Clothes",
            turns: [
                  { who: "A", s: "Do you have this jacket in a smaller size?", ipa: "/duː juː hæv ðɪs ˈdʒækɪt ɪn ə ˈsmɔːlər saɪz/", vn: "Bạn có áo khoác này size nhỏ hơn không?" },
                  { who: "B", s: "Let me check the stock. We have XS and S available.", ipa: "/lɛt miː tʃɛk ðə stɒk wiː hæv ˌɛksˈɛs ænd ɛs əˈveɪləbl/", vn: "Để tôi kiểm tra kho. Chúng tôi có XS và S." },
                  { who: "A", s: "Can I try the S in the fitting room?", ipa: "/kæn aɪ traɪ ðə ɛs ɪn ðə ˈfɪtɪŋ ruːm/", vn: "Tôi có thể thử size S trong phòng thử đồ không?" },
                  { who: "B", s: "Of course. The fitting rooms are at the back.", ipa: "/əv kɔːrs ðə ˈfɪtɪŋ ruːmz ɑːr æt ðə bæk/", vn: "Tất nhiên. Phòng thử đồ ở phía sau." },
                  { who: "A", s: "Does this jacket come in different materials?", ipa: "/dʌz ðɪs ˈdʒækɪt kʌm ɪn ˈdɪfrənt məˈtɪəriəlz/", vn: "Áo khoác này có các chất liệu khác không?" },
                  { who: "B", s: "Yes, there is also a lighter nylon version and a wool blend.", ipa: "/jɛs ðɛr ɪz ˈɔːlsoʊ ə ˈlaɪtər ˈnaɪlɒn ˈvɜːrʒən ænd ə wʊl blɛnd/", vn: "Có, còn có loại nylon nhẹ và pha len." },
                  { who: "A", s: "Is the wool one warmer for winter?", ipa: "/ɪz ðə wʊl wʌn ˈwɔːrmər fər ˈwɪntər/", vn: "Loại len ấm hơn cho mùa đông phải không?" },
                  { who: "B", s: "Yes, it's better for cold weather but slightly more expensive.", ipa: "/jɛs ɪts ˈbɛtər fər koʊld ˈwɛðər bət ˈslaɪtli mɔːr ɪkˈspɛnsɪv/", vn: "Đúng, phù hợp hơn với thời tiết lạnh nhưng hơi đắt hơn." },
                  { who: "A", s: "Do you offer alterations if the sleeve is too long?", ipa: "/duː juː ˈɔːfər ˌɔːltəˈreɪʃənz ɪf ðə sliːv ɪz tuː lɒŋ/", vn: "Bạn có nhận chỉnh tay áo nếu tay áo quá dài không?" },
                  { who: "B", s: "Yes, our tailor can shorten sleeves for a small fee.", ipa: "/jɛs aʊər ˈteɪlər kæn ˈʃɔːrtən sliːvz fər ə smɔːl fiː/", vn: "Có, thợ may của chúng tôi có thể rút tay áo với phí nhỏ." }
            ]
      }
      ,
      {
            id: 126,
            title: "Shopping for Clothes",
            turns: [
                  { who: "A", s: "Are there any promotions on dresses today?", ipa: "/ɑːr ðɛr ˈɛni prəˈmoʊʃənz ɒn drɛsɪz təˈdeɪ/", vn: "Hôm nay có khuyến mãi nào cho váy không?" },
                  { who: "B", s: "Yes, dresses are 25% off this weekend.", ipa: "/jɛs drɛsɪz ɑːr twɛnti faɪv pərˈsɛnt ɔːf ðɪs ˈwiːkɛnd/", vn: "Có, váy giảm 25% cuối tuần này." },
                  { who: "A", s: "Do you accept coupons with sale items?", ipa: "/duː juː əkˈsɛpt ˈkuːpɒnz wɪð seɪl ˈaɪtəmz/", vn: "Bạn có chấp nhận phiếu giảm giá cho hàng giảm giá không?" },
                  { who: "B", s: "Typically not, but loyalty members get extra 5%.", ipa: "/ˈtɪpɪkli nɒt bət ˈlɔɪəlti ˈmɛmbərz ɡɛt ˈɛkstrə faɪv pərˈsɛnt/", vn: "Thường thì không, nhưng thành viên nhận thêm 5%." },
                  { who: "A", s: "How do I sign up for the loyalty program?", ipa: "/haʊ duː aɪ saɪn ʌp fər ðə ˈlɔɪəlti ˈproʊɡræm/", vn: "Làm sao để đăng ký chương trình khách hàng thân thiết?" },
                  { who: "B", s: "You can sign up at checkout or on our website.", ipa: "/juː kæn saɪn ʌp æt ˈtʃɛkaʊt ɔːr ɒn aʊər ˈwɛbsaɪt/", vn: "Bạn có thể đăng ký khi thanh toán hoặc trên website." },
                  { who: "A", s: "If I buy two items, is there a bundle discount?", ipa: "/ɪf aɪ baɪ tuː ˈaɪtəmz ɪz ðɛr ə ˈbʌndl dɪsˈkaʊnt/", vn: "Nếu tôi mua hai món có giảm giá theo gói không?" },
                  { who: "B", s: "Yes, buy two get 10% off the cheaper item.", ipa: "/jɛs baɪ tuː ɡɛt tɛn pərˈsɛnt ɔːf ðə ˈtʃiːpər ˈaɪtəm/", vn: "Có, mua hai được giảm 10% cho món rẻ hơn." },
                  { who: "A", s: "Can I reserve an item and pick it up later?", ipa: "/kæn aɪ rɪˈzɜːrv ən ˈaɪtəm ænd pɪk ɪt ʌp ˈleɪtər/", vn: "Tôi có thể giữ món hàng và đến lấy sau không?" },
                  { who: "B", s: "Yes, reserve at the counter and pick up within 48 hours.", ipa: "/jɛs rɪˈzɜːrv æt ðə ˈkaʊntər ænd pɪk ʌp wɪðɪn ˈfɔːrti eɪt aʊərz/", vn: "Có, giữ hàng tại quầy và lấy trong 48 giờ." }
            ]
      }
      ,
      {
            id: 127,
            title: "Shopping for Clothes",
            turns: [
                  { who: "A", s: "What's your return policy for online orders?", ipa: "/wʌts jʊr rɪˈtɜːrn ˈpɒlɪsi fər ˈɒnlaɪn ˈɔːrdərz/", vn: "Chính sách đổi trả cho đơn hàng online là gì?" },
                  { who: "B", s: "Unopened items can be returned within 30 days with receipt.", ipa: "/ʌnˈoʊpənd ˈaɪtəmz kæn bi rɪˈtɜːrnd wɪðɪn θɜːrti deɪz wɪð rɪˈsiːt/", vn: "Hàng chưa mở có thể trả trong 30 ngày kèm hóa đơn." },
                  { who: "A", s: "Do you refund to the original payment method?", ipa: "/duː juː rɪˈfʌnd tə ðə əˈrɪdʒənəl ˈpeɪmənt ˈmɛθəd/", vn: "Bạn hoàn tiền vào phương thức thanh toán ban đầu chứ?" },
                  { who: "B", s: "Yes, refunds go back to the card used at purchase.", ipa: "/jɛs rɪˈfʌndz ɡoʊ bæk tə ðə kɑːrd juzd æt ˈpɜːrtʃəs/", vn: "Có, tiền hoàn sẽ trả về thẻ đã dùng mua hàng." },
                  { who: "A", s: "What about store credit instead of a refund?", ipa: "/wʌt əˈbaʊt stɔːr ˈkrɛdɪt ɪnˈstɛd əv ə rɪˈfʌnd/", vn: "Còn đổi thành phiếu cửa hàng thay vì hoàn tiền thì sao?" },
                  { who: "B", s: "We can issue store credit valid for one year.", ipa: "/wi kæn ˈɪʃuː stɔːr ˈkrɛdɪt ˈvælɪd fər wʌn jɪər/", vn: "Chúng tôi có thể cấp phiếu mua hàng có giá trị 1 năm." },
                  { who: "A", s: "If I need tailoring after purchase, do you help?", ipa: "/ɪf aɪ niːd ˈteɪlərɪŋ ˈæftər ˈpɜːrtʃəs duː juː hɛlp/", vn: "Nếu tôi cần may sửa sau khi mua, bạn có hỗ trợ không?" },
                  { who: "B", s: "Yes, we offer alteration services; prices depend on the change.", ipa: "/jɛs wi ˈɔːfər ˌɔːltəˈreɪʃən ˈsɜːrvɪsɪz praɪsɪz dɪˈpɛnd ɒn ðə tʃeɪndʒ/", vn: "Có, chúng tôi có dịch vụ sửa đồ; giá tùy theo yêu cầu." },
                  { who: "A", s: "Great — thank you for your help.", ipa: "/ɡreɪt θæŋk juː fər jʊr hɛlp/", vn: "Tuyệt — cảm ơn bạn đã giúp." },
                  { who: "B", s: "You're welcome! Let us know if you need anything else.", ipa: "/jʊr ˈwɛlkəm lɛt ʌs noʊ ɪf juː niːd ˈɛnɪθɪŋ ɛls/", vn: "Không có gì! Hãy cho chúng tôi biết nếu bạn cần gì thêm." }
            ]
      }
            ,
            {
                  id: 37,
                  title: "Making a Phone Call",
            turns: [
                  { who: "A", s: "Is this a good time to talk?", ipa: "/ɪz ðɪs ə ɡʊd taɪm tə tɔːk/", vn: "Bây giờ có phải là thời điểm tốt để nói chuyện không?" },
                  { who: "B", s: "Yes, I have a few minutes.", ipa: "/jɛs aɪ hæv ə fjuː ˈmɪnɪts/", vn: "Vâng, tôi có vài phút." },
                  { who: "A", s: "Can we reschedule our meeting?", ipa: "/kæn wiː riːˈskɛdʒuːl ˈaʊər ˈmiːtɪŋ/", vn: "Chúng ta có thể thay đổi lịch họp không?" },
                  { who: "B", s: "Sure, how about tomorrow morning?", ipa: "/ʃʊr haʊ əˈbaʊt təˈmɒroʊ ˈmɔːrnɪŋ/", vn: "Chắc chắn, sáng mai thì sao?" },
                  { who: "A", s: "What time works best for you?", ipa: "/wɒt taɪm wɜːrks bɛst fər juː/", vn: "Thời gian nào phù hợp nhất với bạn?" },
                  { who: "B", s: "How about 9 AM? I have some free time then.", ipa: "/haʊ əˈbaʊt naɪn eɪˈɛm aɪ hæv sʌm friː taɪm ðɛn/", vn: "Sao 9h sáng? Lúc đó tôi rảnh." },
                  { who: "A", s: "Perfect, I'll send a calendar invite.", ipa: "/ˈpɜːrfɪkt aɪl sɛnd ə ˈkælɪndər ɪnˈvaɪt/", vn: "Tuyệt, tôi sẽ gửi lời mời lịch." },
                  { who: "B", s: "Do you need to discuss any documents?", ipa: "/duː juː niːd tə dɪsˈkʌs ˈɛni ˈdɒkjʊmənts/", vn: "Bạn có cần thảo luận tài liệu nào không?" },
                  { who: "A", s: "Yes, I'll email the report beforehand.", ipa: "/jɛs aɪl ˈiːmeɪl ðə rɪˈpɔːrt bɪˈfɔːrhænd/", vn: "Có, tôi sẽ gửi báo cáo trước qua email." },
                  { who: "B", s: "Great, I'll review it before the call.", ipa: "/ɡreɪt aɪl rɪˈvjuː ɪt bɪˈfɔːr ðə kɔːl/", vn: "Tuyệt, tôi sẽ xem trước khi gọi." }
            ]
      }
      ,
      // 38. At the Coffee Shop - Part 2
      {
            id: 38,
            title: "At the Coffee Shop",
            turns: [
                  { who: "A", s: "Can I have that with oat milk?", ipa: "/kæn aɪ hæv ðæt wɪð oʊt mɪlk/", vn: "Tôi có thể dùng sữa yến mạch không?" },
                  { who: "B", s: "Yes, would you like it heated?", ipa: "/jɛs wʊd juː laɪk ɪt hiːtɪd/", vn: "Có, bạn có muốn làm nóng không?" },
                  { who: "A", s: "Please make it extra hot.", ipa: "/pliz meɪk ɪt ˈɛkstrə hɒt/", vn: "Làm ơn làm nóng hơn." },
                  { who: "B", s: "Sure, that'll be ready shortly.", ipa: "/ʃʊr ðætəl bi ˈrɛdi ˈʃɔːrtli/", vn: "Chắc chắn, nó sẽ sẵn sàng ngay." },
                  { who: "A", s: "Do you have almond milk?", ipa: "/duː juː hæv ˈɑːlmənd mɪlk/", vn: "Bạn có sữa hạnh nhân không?" },
                  { who: "B", s: "Yes, almond and soy are available.", ipa: "/jɛs ˈɑːlmənd ænd sɔɪ ɑːr əˈveɪləbl/", vn: "Có, sữa hạnh nhân và đậu nành đều có." },
                  { who: "A", s: "Can I have a double shot?", ipa: "/kæn aɪ hæv ə ˈdʌbəl ʃɒt/", vn: "Tôi có thể lấy hai shot espresso không?" },
                  { who: "B", s: "Sure, extra espresso coming up.", ipa: "/ʃʊr ˈɛkstrə ɛsˈprɛsoʊ ˈkʌmɪŋ ʌp/", vn: "Được, thêm espresso đây." },
                  { who: "A", s: "Do you offer loyalty stamps?", ipa: "/duː juː ˈɔːfər ˈlɔɪəlti stæmps/", vn: "Bạn có tem tích điểm không?" },
                  { who: "B", s: "Yes, the 10th coffee is free after stamps.", ipa: "/jɛs ðə ˈtɛnθ ˈkɒfi ɪz friː ˈæftər stæmps/", vn: "Có, cốc thứ 10 sẽ miễn phí sau khi đủ tem." }
            ]
      }
      ,
      // 39. At the Pharmacy - Part 2
      {
            id: 39,
            title: "At the Pharmacy",
            turns: [
                  { who: "A", s: "Do you have a loyalty card?", ipa: "/duː juː hæv ə ˈlɔɪəlti kɑːrd/", vn: "Bạn có thẻ khách hàng thân thiết không?" },
                  { who: "B", s: "Yes, sign up at the counter.", ipa: "/jɛs saɪn ʌp æt ðə ˈkaʊntər/", vn: "Có, đăng ký tại quầy." },
                  { who: "A", s: "Will it give me discounts?", ipa: "/wɪl ɪt ɡɪv miː dɪsˈkaʊnts/", vn: "Nó có giảm giá cho tôi không?" },
                  { who: "B", s: "Yes, you get points toward discounts.", ipa: "/jɛs juː ɡɛt pɔɪnts təˈwɔːrd dɪsˈkaʊnts/", vn: "Có, bạn sẽ nhận điểm để đổi giảm giá." },
                  { who: "A", s: "Can I buy over-the-counter allergy medicine?", ipa: "/kæn aɪ baɪ ˌoʊvər ðə ˈkaʊntər ˈælɚdʒi ˈmɛdɪsɪn/", vn: "Tôi có thể mua thuốc dị ứng không cần đơn không?" },
                  { who: "B", s: "Yes, we have antihistamines and nasal sprays.", ipa: "/jɛs wi hæv ˌæntiˈhɪstəmiːnz ænd ˈneɪzəl spreɪz/", vn: "Có, chúng tôi có thuốc kháng histamine và xịt mũi." },
                  { who: "A", s: "Do you offer flu vaccinations?", ipa: "/duː juː ˈɔːfər fluː ˌvæksɪˈneɪʃənz/", vn: "Bạn có tiêm vắc xin cúm không?" },
                  { who: "B", s: "Yes, walk-ins are welcome or book online.", ipa: "/jɛs wɔːk ɪnz ɑːr ˈwɛlkəm ɔːr bʊk ˈɒnlaɪn/", vn: "Có, bạn có thể đến trực tiếp hoặc đặt lịch trực tuyến." },
                  { who: "A", s: "Can you recommend something for a sore throat?", ipa: "/kæn juː ˌrɛkəˈmɛnd ˈsʌmθɪŋ fər ə sɔːr θroʊt/", vn: "Bạn có thể giới thiệu gì cho đau họng không?" },
                  { who: "B", s: "Throat lozenges and warm salt gargles help.", ipa: "/θroʊt ˈlɒdʒənz ænd wɔːrm sɔːlt ˈɡɑːrɡəlz hɛlp/", vn: "Kẹo ngậm họng và súc miệng nước muối ấm sẽ giúp." }
            ]
      }
      ,
      // 40. Movie Theater - Part 2
      {
            id: 40,
            title: "Movie Theater",
            turns: [
                  { who: "A", s: "Are there any discounts for students?", ipa: "/ɑːr ðɛr ˈɛni dɪsˈkaʊnts fər ˈstjuːdənts/", vn: "Có giảm giá cho sinh viên không?" },
                  { who: "B", s: "Yes, show your student ID at the box office.", ipa: "/jɛs ʃoʊ jʊr ˈstjuːdənt aɪˈdiː æt ðə bɒks ˈɒfɪs/", vn: "Có, xuất trình thẻ sinh viên tại quầy vé." },
                  { who: "A", s: "What time is the next showing?", ipa: "/wʌt taɪm ɪz ðə nɛkst ˈʃoʊɪŋ/", vn: "Màn chiếu tiếp theo là mấy giờ?" },
                  { who: "B", s: "In about 30 minutes in Theater 1.", ipa: "/ɪn əˈbaʊt ˈθɜːrti ˈmɪnɪts ɪn ˈθiːətər wʌn/", vn: "Trong khoảng 30 phút ở Rạp 1." },
                  { who: "A", s: "Are there assigned seats?", ipa: "/ɑːr ðɛr əˈsaɪnd siːts/", vn: "Có chỗ ngồi được chỉ định không?" },
                  { who: "B", s: "For premium screenings yes; regular shows are open seating.", ipa: "/fɔːr ˈpriːmiəm ˈskriːnɪŋz jɛs ˈrɛɡjələr ʃoʊz ɑːr ˈoʊpən ˈsiːtɪŋ/", vn: "Với suất đặc biệt thì có; suất thường là tự chọn chỗ." },
                  { who: "A", s: "Can I buy snacks inside?", ipa: "/kæn aɪ baɪ snæks ɪnˈsaɪd/", vn: "Tôi có thể mua đồ ăn vặt bên trong không?" },
                  { who: "B", s: "Yes, popcorn and drinks are available at the concession stand.", ipa: "/jɛs ˈpɒpkɔːrn ænd drɪŋks ɑːr əˈveɪləbl æt ðə kənˈsɛʃən stænd/", vn: "Có, bỏng ngô và đồ uống có ở quầy bán hàng." },
                  { who: "A", s: "Is there a late-night showing?", ipa: "/ɪz ðɛr ə leɪt naɪt ˈʃoʊɪŋ/", vn: "Có suất chiếu khuya không?" },
                  { who: "B", s: "Yes, we have midnight shows on Fridays and Saturdays.", ipa: "/jɛs wi hæv ˈmɪdnaɪt ʃoʊz ɒn ˈfraɪdeɪz ænd ˈsætərdeɪz/", vn: "Có, có suất nửa đêm vào Thứ sáu và Thứ bảy." }
            ]
      }
      ,
      // 41. Hair Salon - Part 2
      {
            id: 41,
            title: "Hair Salon",
            turns: [
                  { who: "A", s: "Can you style my hair for an event?", ipa: "/kæn juː staɪl maɪ hɛr fər ən ɪˈvɛnt/", vn: "Bạn có thể tạo kiểu tóc cho tôi đi sự kiện không?" },
                  { who: "B", s: "Yes, we offer styling services by appointment.", ipa: "/jɛs wi ˈɔːfər ˈstaɪlɪŋ ˈsɜːrvɪsɪz baɪ əˈpɔɪntmənt/", vn: "Có, chúng tôi có dịch vụ tạo kiểu theo lịch." },
                  { who: "A", s: "How long will it take?", ipa: "/haʊ lɔːŋ wɪl ɪt teɪk/", vn: "Sẽ mất bao lâu?" },
                  { who: "B", s: "About an hour depending on the style.", ipa: "/əˈbaʊt ən aʊər dɪˈpɛndɪŋ ɒn ðə staɪl/", vn: "Khoảng một giờ tùy kiểu." },
                  { who: "A", s: "Do you use organic products?", ipa: "/duː juː juz ɔːrˈɡænɪk ˈprɒdʌkts/", vn: "Bạn có dùng sản phẩm hữu cơ không?" },
                  { who: "B", s: "Yes, we have an organic product line available.", ipa: "/jɛs wi hæv ən ɔːrˈɡænɪk ˈprɒdʌkt laɪn əˈveɪləbl/", vn: "Có, chúng tôi có dòng sản phẩm hữu cơ." },
                  { who: "A", s: "Can you recommend a hairstyle for my face shape?", ipa: "/kæn juː ˌrɛkəˈmɛnd ə ˈhɛərstaɪl fər maɪ feɪs ʃeɪp/", vn: "Bạn có thể gợi ý kiểu tóc phù hợp với khuôn mặt tôi không?" },
                  { who: "B", s: "Yes, let's discuss options after we check your hair texture.", ipa: "/jɛs lɛts dɪˈskʌs ˈɒpʃənz ˈæftər wi tʃɛk jʊr hɛər ˈtɛkstʃər/", vn: "Có, hãy thảo luận sau khi kiểm tra độ tóc của bạn." },
                  { who: "A", s: "Do you accept walk-ins or is appointment required?", ipa: "/duː juː əkˈsɛpt wɔːk ɪnz ɔːr ɪz əˈpɔɪntmənt rɪˈkwaɪərd/", vn: "Bạn có nhận khách không hẹn trước không hay phải đặt lịch?" },
                  { who: "B", s: "We accept both; appointments preferred on weekends.", ipa: "/wi əkˈsɛpt boʊθ əˈpɔɪntmənts prɪˈfɜːrd ɒn ˈwiːkɛndz/", vn: "Chúng tôi nhận cả hai; ưu tiên đặt trước vào cuối tuần." }
            ]
      }
      ,
      // 16. Asking for Directions - Part 2
      {
            id: 16,
            title: "Asking for Directions",
            turns: [
                  { who: "A", s: "Hi, can you tell me how to get to the nearest pharmacy?", ipa: "/haɪ kæn juː tɛl miː haʊ tə ɡɛt tə ðə ˈnɪərɪst ˈfɑːrməsi/", vn: "Xin chào, bạn có thể chỉ cho tôi đường tới hiệu thuốc gần nhất không?" },
                  { who: "B", s: "Sure — go down this street and take the second left. It's next to the bakery.", ipa: "/ʃʊr ɡoʊ daʊn ðɪs striːt ænd teɪk ðə ˈsɛkənd lɛft ɪts nɛkst tə ðə ˈbeɪkəri/", vn: "Chắc chắn — đi xuống con phố này và rẽ trái ở ngã thứ hai. Nó bên cạnh tiệm bánh." },
                  { who: "A", s: "Is it within walking distance?", ipa: "/ɪz ɪt wɪðˈɪn ˈwɔːkɪŋ ˈdɪstəns/", vn: "Có thể đi bộ đến đó được không?" },
                  { who: "B", s: "Yes, about five minutes. You can't miss it.", ipa: "/jɛs əˈbaʊt faɪv ˈmɪnɪts juː kænt mɪs ɪt/", vn: "Vâng, khoảng năm phút. Bạn sẽ không thể bỏ lỡ nó." },
                  { who: "A", s: "What are the pharmacy's opening hours?", ipa: "/wʌt ɑːr ðə ˈfɑːrməsiːz ˈoʊpənɪŋ ˈaʊərz/", vn: "Hiệu thuốc mở cửa mấy giờ?" },
                  { who: "B", s: "They open at 8 AM and close at 9 PM every day.", ipa: "/ðeɪ ˈoʊpən æt eɪt eɪˈɛm ænd kloʊz æt naɪn piː ˈɛm ˈɛvəri deɪ/", vn: "Họ mở cửa lúc 8 giờ sáng và đóng cửa lúc 9 giờ tối mỗi ngày." },
                  { who: "A", s: "Do they sell over-the-counter cold medicine?", ipa: "/duː ðeɪ sɛl ˈoʊvər ðə ˈkaʊntər koʊld ˈmɛdɪsɪn/", vn: "Họ có bán thuốc cảm không cần đơn không?" },
                  { who: "B", s: "Yes, they have common pain relievers and cold remedies.", ipa: "/jɛs ðeɪ hæv ˈkɒmən peɪn rɪˈlivərz ænd koʊld ˈrɛmədiz/", vn: "Có, họ có thuốc giảm đau và thuốc cảm thông thường." },
                  { who: "A", s: "Great. Can you recommend a 24-hour pharmacy?", ipa: "/ɡreɪt kæn juː ˌrɛkəˈmɛnd ə ˈtwɛnti fɔːr ˈaʊər ˈfɑːrməsi/", vn: "Tuyệt. Bạn có thể giới thiệu hiệu thuốc 24 giờ không?" },
                  { who: "B", s: "There's a 24-hour pharmacy two blocks east of the square.", ipa: "/ðɛrz ə ˈtwɛnti fɔːr ˈaʊər ˈfɑːrməsi tuː blɑːks iːst əv ðə skwɛər/", vn: "Có một hiệu thuốc 24 giờ cách quảng trường hai dãy nhà về phía đông." }
            ]
      }
      ,
      // 17. Asking for Directions - Part 3 (public transport)
      {
            id: 17,
            title: "Asking for Directions",
            turns: [
                  { who: "A", s: "Excuse me, which bus goes to the university?", ipa: "/ɪkˈskjuːz miː wɪtʃ bʌs ɡoʊz tə ðə ˌjuːnɪˈvɜːrsəti/", vn: "Xin lỗi, tuyến xe buýt nào đi đến trường đại học?" },
                  { who: "B", s: "Take bus 12 or 14. Get off at Central Station then change to the campus shuttle.", ipa: "/teɪk bʌs twɛlv ɔːr fɔːrˈtiːn ɡɛt ɔf æt ˈsɛntrəl ˈsteɪʃən ðɛn tʃeɪndʒ tə ðə ˈkæmpəs ˈʃʌtəl/", vn: "Bắt tuyến 12 hoặc 14. Xuống ở Ga Trung tâm rồi chuyển sang xe buýt nội bộ tới khuôn viên." },
                  { who: "A", s: "How often do they run?", ipa: "/haʊ ˈɔːfən duː ðeɪ rʌn/", vn: "Bao lâu thì có một chuyến?" },
                  { who: "B", s: "Every 15 minutes during the day, less at night.", ipa: "/ˈɛvəri fɪfˈtiːn ˈmɪnəts ˈdʊrɪŋ ðə deɪ lɛs æt naɪt/", vn: "Mỗi 15 phút một chuyến vào ban ngày, ít hơn vào ban đêm." },
                  { who: "A", s: "Where should I wait for the bus?", ipa: "/wɛr ʃʊd aɪ weɪt fər ðə bʌs/", vn: "Tôi nên chờ xe buýt ở đâu?" },
                  { who: "B", s: "At the marked stop on Main Street near the newsstand.", ipa: "/ət ðə mɑːrkt stɒp ɒn meɪn striːt nɪər ðə njuːzstænd/", vn: "Ở điểm dừng có đánh dấu trên phố Chính gần quầy báo." },
                  { who: "A", s: "Do I need an exact fare or a travel card?", ipa: "/duː aɪ niːd ən ɪɡˈzækt fɛr ɔːr ə ˈtrævəl kɑːrd/", vn: "Tôi cần tiền lẻ hay thẻ đi lại?" },
                  { who: "B", s: "You can pay exact fare on the bus or use a reloadable transport card.", ipa: "/juː kæn peɪ ɪɡˈzækt fɛr ɒn ðə bʌs ɔːr juz ə rɪˈloʊdəbl ˈtrænspɔːrt kɑːrd/", vn: "Bạn có thể trả tiền lẻ trên xe hoặc dùng thẻ giao thông nạp tiền." },
                  { who: "A", s: "How much is the fare to Central Station?", ipa: "/haʊ mʌtʃ ɪz ðə fɛr tə ˈsɛntrəl ˈsteɪʃən/", vn: "Tiền vé đến Ga Trung tâm là bao nhiêu?" },
                  { who: "B", s: "It's about $1.50 one-way, cheaper with a day pass.", ipa: "/ɪts əˈbaʊt wʌn ˈfɪfti wʌn weɪ ˈtʃiːpər wɪð ə deɪ pæs/", vn: "Khoảng $1.50 một chiều, rẻ hơn nếu mua vé ngày." }
            ]
      }
      ,
      // 18. Asking for Directions - Part 4 (asking for landmarks)
      {
            id: 18,
            title: "Asking for Directions",
            turns: [
                  { who: "A", s: "I'm trying to find the art museum. Is there a big landmark nearby?", ipa: "/aɪm ˈtraɪɪŋ tə faɪnd ði ɑːrt mjuːˈziːəm ɪz ðɛr ə bɪɡ ˈlændmɑːrk nɪərˈbaɪ/", vn: "Tôi đang cố tìm bảo tàng nghệ thuật. Có địa danh lớn nào gần đó không?" },
                  { who: "B", s: "Yes — look for the tall clock tower. The museum is just behind it.", ipa: "/jɛs lʊk fər ðə tɔːl klɑːk ˈtaʊər ðə mjuːˈziːəm ɪz dʒəst bɪˈhaɪnd ɪt/", vn: "Có — hãy tìm ngọn tháp đồng hồ cao. Bảo tàng nằm ngay phía sau nó." },
                  { who: "A", s: "Is there a bus that stops near the museum?", ipa: "/ɪz ðɛr ə bʌs ðæt stɒps nɪər ðə mjuːˈziːəm/", vn: "Có chuyến xe buýt nào dừng gần bảo tàng không?" },
                  { who: "B", s: "Yes, take bus 7 and get off at Museum Stop.", ipa: "/jɛs teɪk bʌs sɛvən ænd ɡɛt ɔf æt mjuːˈziːəm stɒp/", vn: "Có, đi xe buýt số 7 và xuống ở trạm Bảo tàng." },
                  { who: "A", s: "Are there guided tours available?", ipa: "/ɑːr ðeər ˈɡaɪdɪd tʊərz əˈveɪləbl/", vn: "Có tour có hướng dẫn không?" },
                  { who: "B", s: "Yes, tours start every hour from 10 AM.", ipa: "/jɛs tʊərz stɑːrt ˈɛvri ˈaʊər frəm tɛn eɪˈɛm/", vn: "Có, tour bắt đầu mỗi giờ từ 10 giờ sáng." },
                  { who: "A", s: "What's the ticket price?", ipa: "/wʌts ðə ˈtɪkɪt praɪs/", vn: "Giá vé là bao nhiêu?" },
                  { who: "B", s: "Adults are $12, students $6, and children are free.", ipa: "/əˈdʌlts ɑːr twɛlv ˈstjuːdənts sɪks ænd ˈtʃɪldrən ɑːr friː/", vn: "Người lớn 12 đô, sinh viên 6 đô, trẻ em miễn phí." },
                  { who: "A", s: "Thank you — that makes it easier.", ipa: "/ˈθæŋk juː ðæt meɪks ɪt ˈiːziər/", vn: "Cảm ơn — điều đó dễ tìm hơn." },
                  { who: "B", s: "No problem. Enjoy your visit!", ipa: "/noʊ ˈprɒbləm ɪnˈdʒɔɪ jʊr ˈvɪzɪt/", vn: "Không có gì. Chúc bạn tham quan vui vẻ!" }
            ]
      }
      ,
      // 134-136: At the Doctor's Office - Parts 3,4,5
      {
            id: 134,
            title: "At the Doctor's Office",
            turns: [
                  { who: "A", s: "I still have mild pain in my ankle after the sprain.", ipa: "/aɪ stɪl hæv maɪld peɪn ɪn maɪ ˈæŋkəl ˈæftər ðə spreɪn/", vn: "Tôi vẫn bị đau nhẹ ở mắt cá sau khi bị bong gân." },
                  { who: "B", s: "Let's check the swelling and range of motion.", ipa: "/lɛts tʃɛk ðə ˈswɛlɪŋ ænd reɪndʒ əv ˈmoʊʃən/", vn: "Chúng ta kiểm tra sưng và phạm vi cử động." },
                  { who: "A", s: "Should I continue icing it?", ipa: "/ʃʊd aɪ kənˈtɪnjuː ˈaɪsɪŋ ɪt/", vn: "Tôi có nên tiếp tục chườm đá không?" },
                  { who: "B", s: "Yes, ice twice a day and keep it elevated.", ipa: "/jɛs aɪs twaɪs ə deɪ ænd kip ɪt ˈɛlɪveɪtɪd/", vn: "Có, chườm đá hai lần một ngày và kê cao chân." },
                  { who: "A", s: "Do I need an X-ray?", ipa: "/duː aɪ niːd ən ˈɛksreɪ/", vn: "Tôi có cần chụp X-quang không?" },
                  { who: "B", s: "If pain persists we can order an X-ray to rule out a fracture.", ipa: "/ɪf peɪn pəˈsɪsts wi kæn ˈɔːrdər ən ˈɛksreɪ tə ruːl aʊt ə ˈfræktʃər/", vn: "Nếu đau tiếp tục, chúng tôi sẽ chỉ định chụp X-quang để loại trừ gãy xương." },
                  { who: "A", s: "Can I return to light exercise?", ipa: "/kæn aɪ rɪˈtɜːrn tə laɪt ˈɛksərsaɪz/", vn: "Tôi có thể tập thể dục nhẹ lại không?" },
                  { who: "B", s: "Yes, start gently and stop if you feel increased pain.", ipa: "/jɛs stɑːrt ˈdʒɛntli ænd stɒp ɪf juː fiːl ɪnˈkriːst peɪn/", vn: "Có, bắt đầu nhẹ nhàng và dừng nếu cảm thấy đau hơn." },
                  { who: "A", s: "Should I take anti-inflammatories?", ipa: "/ʃʊd aɪ teɪk ˌænti ɪnˌflæməˈtɔːriz/", vn: "Tôi có nên uống thuốc chống viêm không?" },
                  { who: "B", s: "You can take ibuprofen as directed, unless you have contraindications.", ipa: "/juː kæn teɪk aɪbjʊˈprəʊfən æz dɪˈrɛktɪd ənˈlɛs juː hæv ˌkɒntrəˌɪndɪˈkeɪʃənz/", vn: "Bạn có thể uống ibuprofen theo hướng dẫn, trừ khi có chống chỉ định." }
            ]
      },
      {
            id: 135,
            title: "At the Doctor's Office",
            turns: [
                  { who: "A", s: "I've been having trouble sleeping lately.", ipa: "/aɪv bɪn ˈhævɪŋ ˈtrʌbəl ˈsliːpɪŋ ˈleɪtli/", vn: "Gần đây tôi gặp khó ngủ." },
                  { who: "B", s: "How many hours do you sleep on average?", ipa: "/haʊ ˈmɛni aʊərz duː juː sliːp ɒn ˈævərɪdʒ/", vn: "Bạn ngủ trung bình bao nhiêu giờ?" },
                  { who: "A", s: "About four to five hours, and I wake up often.", ipa: "/əˈbaʊt fɔːr tə faɪv aʊərz ænd aɪ weɪk ʌp ˈɒfən/", vn: "Khoảng 4–5 tiếng và tôi thường xuyên tỉnh dậy." },
                  { who: "B", s: "Do you consume caffeine or screens before bed?", ipa: "/duː juː kənˈsjuːm ˈkæfiːn ɔːr skriːnz bɪˈfɔːr bɛd/", vn: "Bạn có dùng caffeine hoặc dùng màn hình trước khi ngủ không?" },
                  { who: "A", s: "Yes, I often have coffee in the afternoon and use my phone at night.", ipa: "/jɛs aɪ ˈɒfən hæv ˈkɒfi ɪn ði ˌæftərˈnuːn ænd juz maɪ foʊn æt naɪt/", vn: "Có, tôi hay uống cà phê buổi chiều và dùng điện thoại buổi tối." },
                  { who: "B", s: "Try reducing caffeine and avoiding screens an hour before bed.", ipa: "/traɪ rɪˈdjuːsɪŋ ˈkæfiːn ænd əˈvɔɪdɪŋ skriːnz ən ˈaʊər bɪˈfɔːr bɛd/", vn: "Thử giảm caffeine và tránh màn hình trước khi ngủ một giờ." },
                  { who: "A", s: "If that doesn't help, can you prescribe something?", ipa: "/ɪf ðæt ˈdʌzənt hɛlp kæn juː prɪˈskraɪb ˈsʌmθɪŋ/", vn: "Nếu không cải thiện, bạn có thể kê thuốc không?" },
                  { who: "B", s: "We can consider a short course of sleep aids, but let's try behavior changes first.", ipa: "/wi kæn kənˈsɪdər ə ʃɔːrt kɔːrs əv sliːp eɪdz bət lɛts traɪ bɪˈheɪvjər tʃeɪndʒɪz fɜːrst/", vn: "Chúng ta có thể cân nhắc thuốc ngủ ngắn hạn, nhưng hãy thử thay đổi thói quen trước." },
                  { who: "A", s: "Should I follow up if nothing improves?", ipa: "/ʃʊd aɪ ˈfɒləʊ ʌp ɪf ˈnʌθɪŋ ɪmˈpruːvz/", vn: "Nếu không cải thiện thì tôi nên tái khám không?" },
                  { who: "B", s: "Yes, come back in two weeks and we'll reassess your sleep.", ipa: "/jɛs kʌm bæk ɪn tuː wiːks ænd wil ˌriːəˈsɛs jʊr sliːp/", vn: "Có, quay lại sau hai tuần và chúng tôi sẽ đánh giá lại giấc ngủ của bạn." }
            ]
      },
      {
            id: 136,
            title: "At the Doctor's Office",
            turns: [
                  { who: "A", s: "I cut my hand and it's still bleeding a bit.", ipa: "/aɪ kʌt maɪ hænd ænd ɪts stɪl ˈbliːdɪŋ ə bɪt/", vn: "Tôi bị cắt tay và vẫn còn chảy máu một chút." },
                  { who: "B", s: "Let's clean it and apply pressure; is the cut deep?", ipa: "/lɛts kliːn ɪt ænd əˈplaɪ ˈprɛʃər ɪz ðə kʌt diːp/", vn: "Hãy rửa sạch và ép chặt; vết cắt có sâu không?" },
                  { who: "A", s: "I can see some tissue but it's not very deep.", ipa: "/aɪ kən siː sʌm ˈtɪʃuː bət ɪts nɒt ˈvɛri diːp/", vn: "Tôi thấy tổ chức nhưng không quá sâu." },
                  { who: "B", s: "We'll clean it, stitch if needed, and give you a tetanus update if necessary.", ipa: "/wil kliːn ɪt stɪtʃ ɪf ˈniːdɪd ænd ɡɪv juː ə ˈtɛtənəs ʌpˌdeɪt ɪf ˈnɛsəsəri/", vn: "Chúng tôi sẽ rửa, khâu nếu cần và cập nhật uốn ván nếu cần thiết." },
                  { who: "A", s: "How long until it heals?", ipa: "/haʊ lɒŋ ənˈtɪl ɪt hiːlz/", vn: "Mất bao lâu để lành?" },
                  { who: "B", s: "Minor cuts usually heal in 1–2 weeks; keep it clean and dry.", ipa: "/ˈmaɪnər kʌts ˈjuːʒəli hiːl ɪn wʌn tuː wiːks kip ɪt kliːn ænd draɪ/", vn: "Vết cắt nhỏ thường lành trong 1–2 tuần; giữ sạch và khô." },
                  { who: "A", s: "Do I need antibiotics?", ipa: "/duː aɪ niːd ˌæntibaɪˈɒtɪks/", vn: "Tôi có cần kháng sinh không?" },
                  { who: "B", s: "Only if there's a sign of infection; we'll advise based on the wound.", ipa: "/ˈoʊnli ɪf ðerz ə saɪn əv ɪnˈfɛkʃən wil ədˈvaɪz beɪst ɒn ðə wuːnd/", vn: "Chỉ khi có dấu hiệu nhiễm trùng; chúng tôi sẽ tư vấn dựa trên vết thương." },
                  { who: "A", s: "Should I change the dressing daily?", ipa: "/ʃʊd aɪ tʃeɪndʒ ðə ˈdrɛsɪŋ ˈdeɪli/", vn: "Tôi có nên thay băng hàng ngày không?" },
                  { who: "B", s: "Change it daily and watch for redness or increased pain.", ipa: "/tʃeɪndʒ ɪt ˈdeɪli ænd wɒtʃ fər ˈrɛdnəs ɔːr ɪnˈkriːst peɪn/", vn: "Thay hàng ngày và chú ý nếu có đỏ hoặc đau hơn." }
            ]
      },

      // 137-139: At the Coffee Shop - Parts 3,4,5
      {
            id: 137,
            title: "At the Coffee Shop",
            turns: [
                  { who: "A", s: "Do you offer seasonal drinks right now?", ipa: "/duː juː ˈɔːfər ˈsiːzənəl drɪŋks raɪt naʊ/", vn: "Hiện bạn có đồ uống theo mùa không?" },
                  { who: "B", s: "Yes, we have a pumpkin spice latte and a maple cold brew.", ipa: "/jɛs wi hæv ə ˈpʌmpkɪn spaɪs ˈlɑːteɪ ænd ə ˈmeɪpəl koʊld bruː/", vn: "Có, chúng tôi có latte vị bí đỏ và cold brew vị maple." },
                  { who: "A", s: "Can you make my drink half-sweet?", ipa: "/kæn juː meɪk maɪ drɪŋk hæf swiːt/", vn: "Bạn có thể làm đồ uống ít ngọt không?" },
                  { who: "B", s: "Sure — we can reduce the syrup by half.", ipa: "/ʃʊr wi kæn rɪˈdjuːs ðə sɪrəp baɪ hæf/", vn: "Được — chúng tôi có thể giảm siro một nửa." },
                  { who: "A", s: "Do you have dairy-free milk alternatives?", ipa: "/duː juː hæv ˈdɛəri friː mɪlk ɔːltərˈnətɪvz/", vn: "Bạn có sữa thay thế không chứa sữa bò không?" },
                  { who: "B", s: "Yes, almond, oat, and soy are available.", ipa: "/jɛs ˈɑːlmənd oʊt ænd sɔɪ ɑːr əˈveɪləbl/", vn: "Có, sữa hạnh nhân, yến mạch và đậu nành." },
                  { who: "A", s: "Can I pay through the app and pick up?", ipa: "/kæn aɪ peɪ θruː ði æp ænd pɪk ɪt ʌp/", vn: "Tôi có thể thanh toán qua app và nhận hàng không?" },
                  { who: "B", s: "Yes — order in the app and choose 'pickup' for a fast lane.", ipa: "/jɛs ˈɔːrdər ɪn ði æp ænd tʃuːz pɪkʌp fər ə fɑːst leɪn/", vn: "Có — đặt trong app và chọn 'pickup' để lấy nhanh." },
                  { who: "A", s: "Is there a seating area upstairs?", ipa: "/ɪz ðɛr ə ˈsiːtɪŋ ˈɛriə ʌpˈstɛərz/", vn: "Có khu ngồi trên lầu không?" },
                  { who: "B", s: "Yes, and free Wi‑Fi is available there as well.", ipa: "/jɛs ænd friː waɪ faɪ ɪz əˈveɪləbl ðɛr əz wɛl/", vn: "Có, và có Wi‑Fi miễn phí ở đó." }
            ]
      },
      {
            id: 138,
            title: "At the Coffee Shop",
            turns: [
                  { who: "A", s: "Do you roast your own beans?", ipa: "/duː juː roʊst jʊr oʊn biːnz/", vn: "Bạn có rang hạt cà phê tại chỗ không?" },
                  { who: "B", s: "Yes, our roaster works with local farms for single-origin beans.", ipa: "/jɛs aʊər ˈroʊstər wɜːrks wɪð ˈloʊkəl fɑːrmz fər ˈsɪŋɡəl ˈɒrɪdʒɪn biːnz/", vn: "Có, chúng tôi rang tại quán và làm việc với nông trại địa phương." },
                  { who: "A", s: "Can I buy whole beans to take home?", ipa: "/kæn aɪ baɪ hoʊl biːnz tə teɪk hoʊm/", vn: "Tôi có thể mua hạt cà phê nguyên để mang về không?" },
                  { who: "B", s: "Yes, we sell bags in 250g and 1kg sizes.", ipa: "/jɛs wi sɛl bæɡz ɪn tuː fɪfti ɡ ænd wʌn kɪloʊ saɪzɪz/", vn: "Có, bán gói 250g và 1kg." },
                  { who: "A", s: "Do you offer barista classes?", ipa: "/duː juː ˈɔːfər bəˈrɪstə klæsɪz/", vn: "Bạn có lớp barista không?" },
                  { who: "B", s: "Yes, weekend classes are popular — book online.", ipa: "/jɛs ˈwiːkɛnd klæsɪz ɑːr ˈpɒpjələr bʊk ˈɒnlaɪn/", vn: "Có, lớp cuối tuần rất được ưa thích — đặt trực tuyến." },
                  { who: "A", s: "Is there a discount for students?", ipa: "/ɪz ðɛr ə dɪsˈkaʊnt fər ˈstjuːdənts/", vn: "Có giảm giá cho sinh viên không?" },
                  { who: "B", s: "Students get 10% off with a valid ID.", ipa: "/ˈstjuːdənts ɡɛt tɛn pərˈsɛnt ɒf wɪð ə ˈvælɪd aɪˈdiː/", vn: "Sinh viên được giảm 10% khi có ID." },
                  { who: "A", s: "Can I reserve a table for a group?", ipa: "/kæn aɪ rɪˈzɜːrv ə ˈteɪbəl fər ə ɡruːp/", vn: "Tôi có thể đặt bàn cho nhóm không?" },
                  { who: "B", s: "Yes, call ahead for groups larger than six.", ipa: "/jɛs kɔːl əˈhɛd fər ɡruːps ˈlɑːrdʒər ðæn sɪks/", vn: "Có, gọi trước nếu nhóm trên sáu người." }
            ]
      },
      {
            id: 139,
            title: "At the Coffee Shop",
            turns: [
                  { who: "A", s: "Is your Wi‑Fi password displayed?", ipa: "/ɪz jʊr waɪ faɪ ˈpæswɜːrd dɪsˈpleɪd/", vn: "Mật khẩu Wi‑Fi có được hiển thị không?" },
                  { who: "B", s: "Yes, it's on the chalkboard by the counter.", ipa: "/jɛs ɪts ɒn ðə ˈtʃɔːkbɔːrd baɪ ðə ˈkaʊntər/", vn: "Có, trên bảng viết phấn cạnh quầy." },
                  { who: "A", s: "Do you have non-dairy pastries?", ipa: "/duː juː hæv nɒn ˈdɛəri ˈpeɪstriz/", vn: "Bạn có bánh ngọt không chứa sữa không?" },
                  { who: "B", s: "We have vegan muffins and some dairy-free cookies.", ipa: "/wi hæv ˈviːɡən ˈmʌfɪnz ænd sʌm ˈdɛəri friː ˈkʊkiz/", vn: "Có, muffin thuần chay và một số bánh quy không sữa." },
                  { who: "A", s: "Can I bring my own cup for a discount?", ipa: "/kæn aɪ brɪŋ maɪ oʊn kʌp fər ə dɪsˈkaʊnt/", vn: "Tôi có thể mang cốc riêng để được giảm giá không?" },
                  { who: "B", s: "Yes, we offer a small discount for reusable cups.", ipa: "/jɛs wi ˈɔːfər ə smɔːl dɪsˈkaʊnt fər rɪˈjuːzəbəl kʌps/", vn: "Có, chúng tôi giảm nhẹ cho cốc tái sử dụng." },
                  { who: "A", s: "What are your opening hours on Sundays?", ipa: "/wɒt ɑːr jɔːr ˈoʊpənɪŋ ˈaʊərz ɒn ˈsʌndeɪz/", vn: "Chủ nhật bạn mở cửa mấy giờ?" },
                  { who: "B", s: "We're open from 8 AM to 6 PM on Sundays.", ipa: "/wɪər ˈoʊpən frɒm eɪt eɪˈɛm tə sɪks piː ˈɛm ɒn ˈsʌndeɪz/", vn: "Mở cửa từ 8h đến 18h vào Chủ nhật." },
                  { who: "A", s: "Do you offer gift cards?", ipa: "/duː juː ˈɔːfər ɡɪft kɑːrdz/", vn: "Bạn có bán thẻ quà tặng không?" },
                  { who: "B", s: "Yes, ask at the counter and we can load any amount.", ipa: "/jɛs æsk æt ðə ˈkaʊntər ænd wi kæn loʊd ˈɛni əˈmaʊnt/", vn: "Có, hỏi quầy và chúng tôi có thể nạp mọi mệnh giá." }
            ]
      },

      // 140-142: At the Library - Parts 3,4,5
      {
            id: 140,
            title: "At the Library",
            turns: [
                  { who: "A", s: "Do you offer interlibrary loans for books you don't have?", ipa: "/duː juː ˈɔːfər ˌɪntərˈlaɪbrəri loʊnz fər bʊks juː doʊnt hæv/", vn: "Bạn có cho mượn liên thư viện cho sách không có ở đây không?" },
                  { who: "B", s: "Yes, we can request books from partner libraries — it takes about a week.", ipa: "/jɛs wi kæn rɪˈkwɛst bʊks frəm ˈpɑːrtnər ˈlaɪbrəriz ɪt teɪks əˈbaʊt ə wiːk/", vn: "Có, chúng tôi có thể yêu cầu từ thư viện đối tác — mất khoảng một tuần." },
                  { who: "A", s: "Is there a fee for interlibrary loans?", ipa: "/ɪz ðɛr ə fiː fər ˌɪntərˈlaɪbrəri loʊnz/", vn: "Có phí mượn liên thư viện không?" },
                  { who: "B", s: "Usually a small processing fee may apply depending on the partner.", ipa: "/ˈjuːʒəli ə smɔːl ˈproʊsɛsɪŋ fiː meɪ əˈplaɪ dɪˈpɛndɪŋ ɒn ðə ˈpɑːrtnər/", vn: "Thường có phí xử lý nhỏ tuỳ đối tác." },
                  { who: "A", s: "How do I request an interlibrary loan?", ipa: "/haʊ duː aɪ rɪˈkwɛst ən ˌɪntərˈlaɪbrəri loʊn/", vn: "Làm sao để yêu cầu mượn liên thư viện?" },
                  { who: "B", s: "Fill out this form or request online with your library card number.", ipa: "/fɪl aʊt ðɪs fɔːrm ɔːr rɪˈkwɛst ˈɒnlaɪn wɪð jʊr ˈlaɪbrəri kɑːrd ˈnʌmbər/", vn: "Điền mẫu này hoặc yêu cầu trực tuyến với số thẻ thư viện." },
                  { who: "A", s: "Can I pick it up here when it arrives?", ipa: "/kæn aɪ pɪk ɪt ʌp hɪər wɛn ɪt əˈraɪvz/", vn: "Tôi có thể đến lấy ở đây khi sách đến không?" },
                  { who: "B", s: "Yes, we'll notify you by email or phone when it's ready.", ipa: "/jɛs wil ˈnoʊtɪfaɪ juː baɪ ˈiːmeɪl ɔːr foʊn wɛn ɪts ˈrɛdi/", vn: "Có, chúng tôi sẽ thông báo qua email hoặc điện thoại khi sẵn sàng." },
                  { who: "A", s: "How long can I borrow interlibrary items?", ipa: "/haʊ lɒŋ kæn aɪ ˈbɒroʊ ˌɪntərˈlaɪbrəri ˈaɪtəmz/", vn: "Tôi được mượn bao lâu?" },
                  { who: "B", s: "Loan periods vary but are usually two to four weeks.", ipa: "/loʊn ˈpɪəriədz ˈvɛri bət ɑːr ˈjuːʒəli tuː tə fɔːr wiːks/", vn: "Thời gian mượn khác nhau nhưng thường 2–4 tuần." }
            ]
      },
      {
            id: 141,
            title: "At the Library",
            turns: [
                  { who: "A", s: "Can I reserve a study room for a group project?", ipa: "/kæn aɪ rɪˈzɜːrv ə ˈstʌdi rum fər ə ɡruːp ˈprɒdʒɛkt/", vn: "Tôi có thể đặt phòng học nhóm cho dự án không?" },
                  { who: "B", s: "Yes, rooms can be reserved online or at the front desk.", ipa: "/jɛs rumz kæn bi rɪˈzɜːrvd ˈɒnlaɪn ɔːr æt ðə frʌnt dɛsk/", vn: "Có, có thể đặt trực tuyến hoặc ở quầy." },
                  { who: "A", s: "What's the maximum booking time?", ipa: "/wɒts ðə ˈmæksɪməm ˈbʊkɪŋ taɪm/", vn: "Thời gian đặt tối đa là bao lâu?" },
                  { who: "B", s: "Typically two hours per booking; you can extend if nobody else booked.", ipa: "/ˈtɪpɪkəli tuː aʊərz pər ˈbʊkɪŋ juː kæn ɪkˈstɛnd ɪf ˈnəʊbədi ɛls bʊkt/", vn: "Thông thường hai giờ mỗi lần; có thể gia hạn nếu không ai đặt sau." },
                  { who: "A", s: "Are whiteboards provided?", ipa: "/ɑːr ˈwaɪtbɔːrdz prəˈvaɪdɪd/", vn: "Có bảng trắng không?" },
                  { who: "B", s: "Yes, all study rooms include a whiteboard and markers.", ipa: "/jɛs ɔːl ˈstʌdi rumz ɪnˈkluːd ə ˈwaɪtbɔːrd ænd ˈmɑːrkərz/", vn: "Có, có bảng trắng và bút dạ." },
                  { who: "A", s: "Can I eat in the study room?", ipa: "/kæn aɪ iːt ɪn ðə ˈstʌdi rum/", vn: "Tôi có thể ăn trong phòng học không?" },
                  { who: "B", s: "Light snacks are okay but please avoid messy foods.", ipa: "/laɪt snæks ɑːr oʊˈkeɪ bət pliz əˈvɔɪd ˈmɛsi fuːdz/", vn: "Ăn nhẹ được, nhưng tránh đồ ăn bừa bộn." },
                  { who: "A", s: "Is there a cancellation policy for reservations?", ipa: "/ɪz ðɛr ə ˌkænsəˈleɪʃən ˈpɒlɪsi fər ˌrɛzərˈveɪʃənz/", vn: "Có chính sách hủy phòng không?" },
                  { who: "B", s: "Cancel at least one hour before your slot to free it for others.", ipa: "/ˈkænsəl æt list wʌn ˈaʊər bɪˈfɔːr jʊr slɒt tə friː ɪt fər ˈʌðərz/", vn: "Hủy trước ít nhất 1 giờ để người khác có thể đặt." }
            ]
      },
      {
            id: 142,
            title: "At the Library",
            turns: [
                  { who: "A", s: "Do you have public computers I can use?", ipa: "/duː juː hæv ˈpʌblɪk kəmˈpjuːtərz aɪ kæn juz/", vn: "Bạn có máy tính công cộng để tôi dùng không?" },
                  { who: "B", s: "Yes, computers are available; sign in with your library card.", ipa: "/jɛs kəmˈpjuːtərz ɑːr əˈveɪləbl saɪn ɪn wɪð jʊr ˈlaɪbrəri kɑːrd/", vn: "Có, máy tính có sẵn; đăng nhập bằng thẻ thư viện." },
                  { who: "A", s: "Can I print documents here?", ipa: "/kæn aɪ prɪnt ˈdɒkjʊmənts hɪər/", vn: "Tôi có thể in tài liệu ở đây không?" },
                  { who: "B", s: "Yes, printing is 10 cents per page; choose 'library printer' on your device.", ipa: "/jɛs ˈprɪntɪŋ ɪz tɛn sɛnts pər peɪdʒ tʃuːz ˈlaɪbrəri ˈprɪntər ɒn jʊr dɪˈvaɪs/", vn: "Có, in 10 cent/trang; chọn 'library printer' trên thiết bị." },
                  { who: "A", s: "Is scanning available?", ipa: "/ɪz ˈskænɪŋ əˈveɪləbl/", vn: "Có dịch vụ quét tài liệu không?" },
                  { who: "B", s: "Yes, use the scanner near the printers; files can be emailed to you.", ipa: "/jɛs juz ðə ˈskænər nɪər ðə ˈprɪntərz faɪlz kæn bi ˈiːmeɪld tə juː/", vn: "Có, dùng máy quét gần máy in; file có thể gửi email cho bạn." },
                  { who: "A", s: "Do you offer research help?", ipa: "/duː juː ˈɔːfər rɪˈsɜːrtʃ hɛlp/", vn: "Bạn có hỗ trợ nghiên cứu không?" },
                  { who: "B", s: "Yes, ask at the reference desk and a librarian will assist you.", ipa: "/jɛs æsk æt ðə ˈrɛfrəns dɛsk ænd ə ˌlaɪˈbrɛriən wɪl əˈsɪst juː/", vn: "Có, hỏi tại quầy tra cứu và thủ thư sẽ giúp." },
                  { who: "A", s: "Are there late opening hours during exams?", ipa: "/ɑːr ðɛr leɪt ˈoʊpənɪŋ ˈaʊərz ˈdjʊərɪŋ ɪɡˈzæmz/", vn: "Trong kỳ thi thư viện có mở muộn không?" },
                  { who: "B", s: "Yes, we extend hours during exam weeks — check the website for dates.", ipa: "/jɛs wi ɪkˈstɛnd ˈaʊərz ˈdjʊərɪŋ ɪɡˈzæm wiːks tʃɛk ðə ˈwɛbsaɪt fər deɪts/", vn: "Có, mở giờ muộn trong tuần thi — kiểm tra website để biết ngày." }
            ]
      }
];

// Additional dialogues for more practice
const additionalDialogues = [
      // 11. At the Airport
      {
            id: 11,
            title: "At the Airport",
            turns: [
                  { who: "A", s: "Excuse me, where is the check-in counter?", ipa: "/ɪkˈskjuːz miː wɛr ɪz ðə tʃɛkˈɪn ˈkaʊntər/", vn: "Xin lỗi, quầy check-in ở đâu?" },
                  { who: "B", s: "It's over there, to your right.", ipa: "/ɪts ˈoʊvər ðɛr tə jʊr raɪt/", vn: "Ở đằng kia, bên phải bạn." },
                  { who: "A", s: "Thank you. Do I need to show my passport?", ipa: "/ˈθæŋk juː duː aɪ nid tə ʃoʊ maɪ ˈpæspɔːrt/", vn: "Cảm ơn. Tôi có cần xuất trình hộ chiếu không?" },
                  { who: "B", s: "Yes, please have it ready.", ipa: "/jɛs pliz hæv ɪt ˈrɛdi/", vn: "Vâng, làm ơn chuẩn bị sẵn." },
                  { who: "A", s: "What time does the flight depart?", ipa: "/wʌt taɪm dʌz ðə flaɪt dɪˈpɑːrt/", vn: "Chuyến bay khởi hành lúc mấy giờ?" },
                  { who: "B", s: "At 3:30 PM. Boarding starts at 3:00.", ipa: "/æt θriː ˈθɜːrdi piː ˈɛm ˈbɔːrdɪŋ stɑːrts æt θriː ˈklɑːk/", vn: "Lúc 3:30 chiều. Lên máy bay bắt đầu lúc 3:00." },
                  { who: "A", s: "Is there a delay?", ipa: "/ɪz ðɛr ə dɪˈleɪ/", vn: "Có bị trễ không?" },
                  { who: "B", s: "No, it's on time.", ipa: "/noʊ ɪts ɑːn taɪm/", vn: "Không, đúng giờ." },
                  { who: "A", s: "Where is the gate?", ipa: "/wɛr ɪz ðə ɡeɪt/", vn: "Cửa ra máy bay ở đâu?" },
                  { who: "B", s: "Gate 12, after security.", ipa: "/ɡeɪt twɛlv ˈæftər sɪˈkjʊrəti/", vn: "Cửa 12, sau khu an ninh." }
            ]
      },
      // 12. At the Bank
      {
            id: 12,
            title: "At the Bank",
            turns: [
                  { who: "A", s: "Hello, I'd like to open a bank account.", ipa: "/həˈloʊ aɪd laɪk tə ˈoʊpən ə bæŋk əˈkaʊnt/", vn: "Xin chào, tôi muốn mở tài khoản ngân hàng." },
                  { who: "B", s: "Sure, what type of account?", ipa: "/ʃʊr wʌt taɪp əv əˈkaʊnt/", vn: "Chắc chắn, loại tài khoản gì?" },
                  { who: "A", s: "A savings account, please.", ipa: "/ə ˈseɪvɪŋz əˈkaʊnt pliz/", vn: "Tài khoản tiết kiệm, làm ơn." },
                  { who: "B", s: "You'll need ID and initial deposit.", ipa: "/jʊl nid aɪˈdiː ænd ɪˈnɪʃəl dɪˈpɑːzɪt/", vn: "Bạn cần ID và tiền gửi ban đầu." },
                  { who: "A", s: "How much is the minimum deposit?", ipa: "/haʊ mʌtʃ ɪz ðə ˈmɪnɪməm dɪˈpɑːzɪt/", vn: "Tiền gửi tối thiểu là bao nhiêu?" },
                  { who: "B", s: "Fifty dollars.", ipa: "/ˈfɪfti ˈdɑːlərz/", vn: "Năm mươi đô la." },
                  { who: "A", s: "Can I get a debit card?", ipa: "/kæn aɪ ɡɛt ə ˈdɛbɪt kɑːrd/", vn: "Tôi có thể có thẻ ghi nợ không?" },
                  { who: "B", s: "Yes, it's included.", ipa: "/jɛs ɪts ɪnˈkluːdɪd/", vn: "Vâng, nó được bao gồm." },
                  { who: "A", s: "How long does it take?", ipa: "/haʊ lɔːŋ dʌz ɪt teɪk/", vn: "Mất bao lâu?" },
                  { who: "B", s: "About two weeks for the card.", ipa: "/əˈbaʊt tuː wiks fər ðə kɑːrd/", vn: "Khoảng hai tuần cho thẻ." }
            ]
      },
      // 13. Ordering Food
      {
            id: 13,
            title: "Ordering Food",
            turns: [
                  { who: "A", s: "Hi, can I order some food?", ipa: "/haɪ kæn aɪ ˈɔːrdər sʌm fud/", vn: "Chào, tôi có thể gọi đồ ăn không?" },
                  { who: "B", s: "Yes, what would you like?", ipa: "/jɛs wʌt wʊd juː laɪk/", vn: "Vâng, bạn muốn gì?" },
                  { who: "A", s: "A pizza and a salad.", ipa: "/ə ˈpitsə ænd ə ˈsæləd/", vn: "Một pizza và một salad." },
                  { who: "B", s: "What toppings on the pizza?", ipa: "/wʌt ˈtɑːpɪŋz ɑːn ðə ˈpitsə/", vn: "Toppings gì trên pizza?" },
                  { who: "A", s: "Cheese and pepperoni.", ipa: "/tʃiz ænd ˌpɛpəˈroʊni/", vn: "Phô mai và pepperoni." },
                  { who: "B", s: "Anything to drink?", ipa: "/ˈɛnɪˌθɪŋ tə drɪŋk/", vn: "Uống gì không?" },
                  { who: "A", s: "A soda, please.", ipa: "/ə ˈsoʊdə pliz/", vn: "Một soda, làm ơn." },
                  { who: "B", s: "That'll be $15. Cash or card?", ipa: "/ðætl bi ˈfɪfˈtin ˈdɑːlərz kæʃ ɔːr kɑːrd/", vn: "Tổng cộng 15 đô. Tiền mặt hay thẻ?" },
                  { who: "A", s: "Card, please.", ipa: "/kɑːrd pliz/", vn: "Thẻ, làm ơn." },
                  { who: "B", s: "Thank you. Your order will be ready soon.", ipa: "/ˈθæŋk juː jʊr ˈɔːrdər wɪl bi ˈrɛdi sun/", vn: "Cảm ơn. Đơn hàng của bạn sẽ sẵn sàng sớm." }
            ]
      },
      // 14. At the Hotel Reception
      {
            id: 14,
            title: "At the Hotel Reception",
            turns: [
                  { who: "A", s: "Hello, I have a reservation.", ipa: "/həˈloʊ aɪ hæv ə ˌrɛzərˈveɪʃən/", vn: "Xin chào, tôi có đặt phòng." },
                  { who: "B", s: "Name and check-in time?", ipa: "/neɪm ænd tʃɛkˈɪn taɪm/", vn: "Tên và giờ check-in?" },
                  { who: "A", s: "John Smith, for today.", ipa: "/dʒɑːn smɪθ fər təˈdeɪ/", vn: "John Smith, cho hôm nay." },
                  { who: "B", s: "Here's your key, room 205.", ipa: "/hɪrz jʊr kiː rum tuː ˈoʊ faɪv/", vn: "Đây là chìa khóa, phòng 205." },
                  { who: "A", s: "Is breakfast included?", ipa: "/ɪz ˈbrɛkfəst ɪnˈkluːdɪd/", vn: "Bữa sáng có bao gồm không?" },
                  { who: "B", s: "Yes, from 7 to 10 AM.", ipa: "/jɛs frəm ˈsɛvən tə tɛn eɪ ˈɛm/", vn: "Vâng, từ 7 đến 10 sáng." },
                  { who: "A", s: "Where is the elevator?", ipa: "/wɛr ɪz ði ˈɛləˌveɪtər/", vn: "Thang máy ở đâu?" },
                  { who: "B", s: "To your left.", ipa: "/tə jʊr lɛft/", vn: "Bên trái bạn." },
                  { who: "A", s: "Thank you very much.", ipa: "/ˈθæŋk juː ˈvɛri mʌtʃ/", vn: "Cảm ơn rất nhiều." },
                  { who: "B", s: "Enjoy your stay!", ipa: "/ɪnˈdʒɔɪ jʊr steɪ/", vn: "Chúc bạn nghỉ ngơi vui vẻ!" }
            ]
      },
      // 15. At the Post Office
      {
            id: 15,
            title: "At the Post Office",
            turns: [
                  { who: "A", s: "Hi, I need to send a package.", ipa: "/haɪ aɪ nid tə sɛnd ə ˈpækɪdʒ/", vn: "Chào, tôi cần gửi một gói hàng." },
                  { who: "B", s: "Domestic or international?", ipa: "/dəˈmɛstɪk ɔːr ˌɪntərˈnæʃənəl/", vn: "Trong nước hay quốc tế?" },
                  { who: "A", s: "International, to Vietnam.", ipa: "/ˌɪntərˈnæʃənəl tə viˌɛtˈnɑːm/", vn: "Quốc tế, đến Việt Nam." },
                  { who: "B", s: "Weight and size?", ipa: "/weɪt ænd saɪz/", vn: "Trọng lượng và kích thước?" },
                  { who: "A", s: "About 2 kg, small box.", ipa: "/əˈbaʊt tuː ˈkiːləˌɡræmz smɔːl bɑːks/", vn: "Khoảng 2 kg, hộp nhỏ." },
                  { who: "B", s: "That'll cost $25.", ipa: "/ðætl kɑːst ˈtwɛnti faɪv ˈdɑːlərz/", vn: "Sẽ tốn 25 đô." },
                  { who: "A", s: "How long will it take?", ipa: "/haʊ lɔːŋ wɪl ɪt teɪk/", vn: "Sẽ mất bao lâu?" },
                  { who: "B", s: "About 10-14 days.", ipa: "/əˈbaʊt tɛn tə ˈfɔːrˈtin deɪz/", vn: "Khoảng 10-14 ngày." },
                  { who: "A", s: "Can I track it?", ipa: "/kæn aɪ træk ɪt/", vn: "Tôi có thể theo dõi không?" },
                  { who: "B", s: "Yes, with this number.", ipa: "/jɛs wɪð ðɪs ˈnʌmbər/", vn: "Vâng, với số này." }
            ]
      },
      // 16. Job Interview
      {
            id: 16,
            title: "Job Interview",
            turns: [
                  { who: "A", s: "Hello, I'm here for the job interview.", ipa: "/həˈloʊ aɪm hɪr fər ðə dʒɑːb ˈɪntərvjuː/", vn: "Xin chào, tôi đến đây để phỏng vấn việc làm." },
                  { who: "B", s: "Welcome! Please have a seat. I'm the manager.", ipa: "/ˈwɛlkəm pliz hæv ə sit aɪm ðə ˈmænɪdʒər/", vn: "Chào mừng! Làm ơn ngồi xuống. Tôi là quản lý." },
                  { who: "A", s: "Thank you. I'm excited about this opportunity.", ipa: "/ˈθæŋk juː aɪm ɪkˈsaɪtɪd əˈbaʊt ðɪs ˌɑːpərˈtunəti/", vn: "Cảm ơn. Tôi rất hào hứng với cơ hội này." },
                  { who: "B", s: "Tell me about your previous experience.", ipa: "/tɛl miː əˈbaʊt jʊr ˈpriːviəs ɪkˈspɪriəns/", vn: "Kể cho tôi nghe về kinh nghiệm trước đây của bạn." },
                  { who: "A", s: "I worked as a sales assistant for two years.", ipa: "/aɪ wɜːrkt æz ə seɪlz əˈsɪstənt fər tuː jɪrz/", vn: "Tôi làm trợ lý bán hàng trong hai năm." },
                  { who: "B", s: "What are your strengths?", ipa: "/wʌt ɑːr jʊr strɛŋθs/", vn: "Điểm mạnh của bạn là gì?" },
                  { who: "A", s: "I'm good at communication and problem-solving.", ipa: "/aɪm ɡʊd æt kəˌmjunɪˈkeɪʃən ænd ˈprɑːbləm ˈsɑːlvɪŋ/", vn: "Tôi giỏi giao tiếp và giải quyết vấn đề." },
                  { who: "B", s: "Why do you want to work here?", ipa: "/waɪ duː juː wɑːnt tə wɜːrk hɪr/", vn: "Tại sao bạn muốn làm việc ở đây?" },
                  { who: "A", s: "I admire your company's values and growth.", ipa: "/aɪ ædˈmaɪər jʊr ˈkʌmpəniz ˈvæljuːz ænd ɡroʊθ/", vn: "Tôi ngưỡng mộ giá trị và sự phát triển của công ty bạn." },
                  { who: "B", s: "We'll be in touch within a week.", ipa: "/wil bi ɪn tʌtʃ wɪðˈɪn ə wik/", vn: "Chúng tôi sẽ liên lạc trong vòng một tuần." }
            ]
      },
      // 17. Making a Phone Call
      {
            id: 17,
            title: "Making a Phone Call",
            turns: [
                  { who: "A", s: "Hello, is this the restaurant?", ipa: "/həˈloʊ ɪz ðɪs ðə ˈrɛstərənt/", vn: "Xin chào, đây có phải là nhà hàng không?" },
                  { who: "B", s: "Yes, how can I help you?", ipa: "/jɛs haʊ kæn aɪ hɛlp juː/", vn: "Vâng, tôi có thể giúp gì cho bạn?" },
                  { who: "A", s: "I'd like to make a reservation for tonight.", ipa: "/aɪd laɪk tə meɪk ə ˌrɛzərˈveɪʃən fər təˈnaɪt/", vn: "Tôi muốn đặt chỗ cho tối nay." },
                  { who: "B", s: "For how many people?", ipa: "/fər haʊ ˈmɛni ˈpipəl/", vn: "Cho bao nhiêu người?" },
                  { who: "A", s: "Four people, at 7 PM.", ipa: "/fɔːr ˈpipəl æt ˈsɛvən piː ˈɛm/", vn: "Bốn người, lúc 7 giờ tối." },
                  { who: "B", s: "What's your name for the reservation?", ipa: "/wʌts jʊr neɪm fər ðə ˌrɛzərˈveɪʃən/", vn: "Tên bạn để đặt chỗ là gì?" },
                  { who: "A", s: "John Smith. Do you need a phone number?", ipa: "/dʒɑːn smɪθ duː juː nid ə foʊn ˈnʌmbər/", vn: "John Smith. Bạn có cần số điện thoại không?" },
                  { who: "B", s: "Yes, please.", ipa: "/jɛs pliz/", vn: "Vâng, làm ơn." },
                  { who: "A", s: "It's 555-0123.", ipa: "/ɪts faɪv faɪv faɪv oʊ wʌn tuː θriː/", vn: "Là 555-0123." },
                  { who: "B", s: "Thank you. We'll see you at 7 PM.", ipa: "/ˈθæŋk juː wil siː juː æt ˈsɛvən piː ˈɛm/", vn: "Cảm ơn. Chúng tôi sẽ gặp bạn lúc 7 giờ tối." }
            ]
      },
      // 18. At the Coffee Shop
      {
            id: 18,
            title: "At the Coffee Shop",
            turns: [
                  { who: "A", s: "Hi, what would you like to order?", ipa: "/haɪ wʌt wʊd juː laɪk tə ˈɔːrdər/", vn: "Xin chào, bạn muốn gọi gì?" },
                  { who: "B", s: "I'd like a latte, please.", ipa: "/aɪd laɪk ə læˈteɪ pliz/", vn: "Tôi muốn một ly latte, làm ơn." },
                  { who: "A", s: "What size would you like?", ipa: "/wʌt saɪz wʊd juː laɪk/", vn: "Bạn muốn size nào?" },
                  { who: "B", s: "Medium, please.", ipa: "/ˈmidiəm pliz/", vn: "Size trung bình, làm ơn." },
                  { who: "A", s: "Would you like it hot or iced?", ipa: "/wʊd juː laɪk ɪt hɑːt ɔːr aɪst/", vn: "Bạn muốn nóng hay đá?" },
                  { who: "B", s: "Hot, please.", ipa: "/hɑːt pliz/", vn: "Nóng, làm ơn." },
                  { who: "A", s: "Anything else?", ipa: "/ˈɛnɪˌθɪŋ ɛls/", vn: "Còn gì nữa không?" },
                  { who: "B", s: "A croissant, please.", ipa: "/ə krəˈsɑːnt pliz/", vn: "Một ổ bánh sừng bò, làm ơn." },
                  { who: "A", s: "That'll be $8.50.", ipa: "/ðætəl bi eɪt ˈdɑːlərz ænd ˈfɪfti ˈsɛnts/", vn: "Tổng cộng là 8 đô la 50 xu." },
                  { who: "B", s: "Here's $10. Keep the change.", ipa: "/hɪrz tɛn ˈdɑːlərz kip ðə tʃeɪndʒ/", vn: "Đây là 10 đô la. Giữ lại tiền thối." }
            ]
      },
      // 19. At the Pharmacy
      {
            id: 19,
            title: "At the Pharmacy",
            turns: [
                  { who: "A", s: "Hello, how can I help you?", ipa: "/həˈloʊ haʊ kæn aɪ hɛlp juː/", vn: "Xin chào, tôi có thể giúp gì cho bạn?" },
                  { who: "B", s: "I have a headache. Do you have pain relievers?", ipa: "/aɪ hæv ə ˈhɛdeɪk duː juː hæv peɪn rɪˈlivərz/", vn: "Tôi bị đau đầu. Bạn có thuốc giảm đau không?" },
                  { who: "A", s: "Yes, we have several options. What strength would you like?", ipa: "/jɛs wi hæv ˈsɛvərəl ˈɑːpʃənz wʌt strɛŋθ wʊd juː laɪk/", vn: "Vâng, chúng tôi có nhiều lựa chọn. Bạn muốn độ mạnh nào?" },
                  { who: "B", s: "Regular strength, please.", ipa: "/ˈrɛɡjələr strɛŋθ pliz/", vn: "Độ mạnh bình thường, làm ơn." },
                  { who: "A", s: "Are you allergic to any medications?", ipa: "/ɑːr juː əˈlɜːrdʒɪk tə ˈɛni ˌmɛdɪˈkeɪʃənz/", vn: "Bạn có dị ứng với loại thuốc nào không?" },
                  { who: "B", s: "No, I'm not.", ipa: "/noʊ aɪm nɑːt/", vn: "Không, tôi không có." },
                  { who: "A", s: "Here's the medicine. Take one tablet every 4-6 hours.", ipa: "/hɪrz ðə ˈmɛdɪsɪn teɪk wʌn ˈtæblɪt ˈɛvəri fɔːr tə sɪks ˈaʊərz/", vn: "Đây là thuốc. Uống một viên mỗi 4-6 tiếng." },
                  { who: "B", s: "How much does it cost?", ipa: "/haʊ mʌtʃ dʌz ɪt kɔːst/", vn: "Nó giá bao nhiêu?" },
                  { who: "A", s: "It's $5.99 plus tax.", ipa: "/ɪts faɪv ˈdɑːlərz ænd ninety-nine ˈsɛnts plʌs tæks/", vn: "Là 5 đô la 99 xu cộng thuế." },
                  { who: "B", s: "Thank you. I'll take it.", ipa: "/ˈθæŋk juː aɪl teɪk ɪt/", vn: "Cảm ơn. Tôi sẽ lấy nó." }
            ]
      },
      // 20. Movie Theater
      {
            id: 20,
            title: "Movie Theater",
            turns: [
                  { who: "A", s: "Good evening. How many tickets?", ipa: "/ɡʊd ˈivnɪŋ haʊ ˈmɛni ˈtɪkɪts/", vn: "Chào buổi tối. Bao nhiêu vé?" },
                  { who: "B", s: "Two adult tickets, please.", ipa: "/tuː ˈædʌlt ˈtɪkɪts pliz/", vn: "Hai vé người lớn, làm ơn." },
                  { who: "A", s: "Which movie would you like to see?", ipa: "/wɪtʃ ˈmuvi wʊd juː laɪk tə si/", vn: "Bạn muốn xem phim nào?" },
                  { who: "B", s: "The new action movie, please.", ipa: "/ðə nu ˈækʃən ˈmuvi pliz/", vn: "Phim hành động mới, làm ơn." },
                  { who: "A", s: "That starts at 8:30 PM. Would you like popcorn?", ipa: "/ðæt stɑːrts æt eɪt ˈθɜːrti piː ˈɛm wʊd juː laɪk ˈpɑːpkɔːrn/", vn: "Phim bắt đầu lúc 8:30 tối. Bạn có muốn bỏng ngô không?" },
                  { who: "B", s: "Yes, a large popcorn and two drinks.", ipa: "/jɛs ə lɑːrdʒ ˈpɑːpkɔːrn ænd tuː drɪŋks/", vn: "Vâng, một hộp bỏng ngô lớn và hai nước uống." },
                  { who: "A", s: "That'll be $45 total.", ipa: "/ðætəl bi fɔːrti-faɪv ˈdɑːlərz ˈtoʊtəl/", vn: "Tổng cộng là 45 đô la." },
                  { who: "B", s: "Here's $50. Keep the change.", ipa: "/hɪrz fɪfti ˈdɑːlərz kip ðə tʃeɪndʒ/", vn: "Đây là 50 đô la. Giữ lại tiền thối." },
                  { who: "A", s: "Enjoy the movie! Theater 3 is on your left.", ipa: "/ɪnˈdʒɔɪ ðə ˈmuvi ˈθiətər θriː ɪz ɑːn jʊr lɛft/", vn: "Chúc xem phim vui vẻ! Rạp 3 ở bên trái bạn." },
                  { who: "B", s: "Thank you!", ipa: "/ˈθæŋk juː/", vn: "Cảm ơn!" }
            ]
      },
      // 21. Hair Salon
      {
            id: 21,
            title: "Hair Salon",
            turns: [
                  { who: "A", s: "Hello! What can I do for you today?", ipa: "/həˈloʊ wʌt kæn aɪ duː fər juː təˈdeɪ/", vn: "Xin chào! Hôm nay tôi có thể giúp gì cho bạn?" },
                  { who: "B", s: "I'd like a haircut, please.", ipa: "/aɪd laɪk ə ˈhɛrˌkʌt pliz/", vn: "Tôi muốn cắt tóc, làm ơn." },
                  { who: "A", s: "What style are you thinking of?", ipa: "/wʌt staɪl ɑːr juː ˈθɪŋkɪŋ əv/", vn: "Bạn đang nghĩ đến kiểu tóc nào?" },
                  { who: "B", s: "Just a trim, about an inch off.", ipa: "/dʒʌst ə trɪm əˈbaʊt ən ɪntʃ ɔːf/", vn: "Chỉ cắt tỉa một chút, khoảng một inch." },
                  { who: "A", s: "Would you like shampoo and a head massage?", ipa: "/wʊd juː laɪk ʃæmˈpu ænd ə hɛd məˈsɑːʒ/", vn: "Bạn có muốn gội đầu và massage đầu không?" },
                  { who: "B", s: "Yes, that sounds good.", ipa: "/jɛs ðæt saʊndz ɡʊd/", vn: "Vâng, nghe có vẻ tốt." },
                  { who: "A", s: "Please have a seat. I'll be right with you.", ipa: "/pliz hæv ə sit aɪl bi raɪt wɪð juː/", vn: "Làm ơn ngồi xuống. Tôi sẽ đến ngay." },
                  { who: "B", s: "How long will it take?", ipa: "/haʊ lɔŋ wɪl ɪt teɪk/", vn: "Sẽ mất bao lâu?" },
                  { who: "A", s: "About 45 minutes. The total will be $35.", ipa: "/əˈbaʊt fɔːrti-faɪv ˈmɪnɪts ðə ˈtoʊtəl wɪl bi ˈθɜːti-faɪv ˈdɑːlərz/", vn: "Khoảng 45 phút. Tổng cộng sẽ là 35 đô la." },
                  { who: "B", s: "That's fine. Thank you.", ipa: "/ðæts faɪn ˈθæŋk juː/", vn: "Được rồi. Cảm ơn." }
            ]
      }
      ,
      {
            id: 42,
            title: "At the Airport",
            turns: [
                  { who: "A", s: "Excuse me, where is the check-in counter?", ipa: "/ɪkˈskjuːz miː wɛr ɪz ðə tʃɛkˈɪn ˈkaʊntər/", vn: "Xin lỗi, quầy check-in ở đâu?" },
                  { who: "B", s: "It's over there, to your right.", ipa: "/ɪts ˈoʊvər ðɛr tə jʊr raɪt/", vn: "Ở đằng kia, bên phải bạn." },
                  { who: "A", s: "Thank you. Do I need to show my passport?", ipa: "/ˈθæŋk juː duː aɪ nid tə ʃoʊ maɪ ˈpæspɔːrt/", vn: "Cảm ơn. Tôi có cần xuất trình hộ chiếu không?" },
                  { who: "B", s: "Yes, please have it ready.", ipa: "/jɛs pliz hæv ɪt ˈrɛdi/", vn: "Vâng, làm ơn chuẩn bị sẵn." },
                  { who: "A", s: "What time does the flight depart?", ipa: "/wʌt taɪm dʌz ðə flaɪt dɪˈpɑːrt/", vn: "Chuyến bay khởi hành lúc mấy giờ?" },
                  { who: "B", s: "At 3:30 PM. Boarding starts at 3:00.", ipa: "/æt θriː ˈθɜːrdi piː ˈɛm ˈbɔːrdɪŋ stɑːrts æt θriː ˈklɑːk/", vn: "Lúc 3:30 chiều. Lên máy bay bắt đầu lúc 3:00." },
                  { who: "A", s: "Is there a delay?", ipa: "/ɪz ðɛr ə dɪˈleɪ/", vn: "Có bị trễ không?" },
                  { who: "B", s: "No, it's on time.", ipa: "/noʊ ɪts ɑːn taɪm/", vn: "Không, đúng giờ." },
                  { who: "A", s: "Where is the gate?", ipa: "/wɛr ɪz ðə ɡeɪt/", vn: "Cửa ra máy bay ở đâu?" },
                  { who: "B", s: "Gate 12, after security.", ipa: "/ɡeɪt twɛlv ˈæftər sɪˈkjʊrəti/", vn: "Cửa 12, sau khu an ninh." }
            ]
      },
      {
            id: 43,
            title: "At the Airport",
            turns: [
                  { who: "A", s: "Excuse me, where is the check-in counter?", ipa: "/ɪkˈskjuːz miː wɛr ɪz ðə tʃɛkˈɪn ˈkaʊntər/", vn: "Xin lỗi, quầy check-in ở đâu?" },
                  { who: "B", s: "It's over there, to your right.", ipa: "/ɪts ˈoʊvər ðɛr tə jʊr raɪt/", vn: "Ở đằng kia, bên phải bạn." },
                  { who: "A", s: "Thank you. Do I need to show my passport?", ipa: "/ˈθæŋk juː duː aɪ nid tə ʃoʊ maɪ ˈpæspɔːrt/", vn: "Cảm ơn. Tôi có cần xuất trình hộ chiếu không?" },
                  { who: "B", s: "Yes, please have it ready.", ipa: "/jɛs pliz hæv ɪt ˈrɛdi/", vn: "Vâng, làm ơn chuẩn bị sẵn." },
                  { who: "A", s: "What time does the flight depart?", ipa: "/wʌt taɪm dʌz ðə flaɪt dɪˈpɑːrt/", vn: "Chuyến bay khởi hành lúc mấy giờ?" },
                  { who: "B", s: "At 3:30 PM. Boarding starts at 3:00.", ipa: "/æt θriː ˈθɜːrdi piː ˈɛm ˈbɔːrdɪŋ stɑːrts æt θriː ˈklɑːk/", vn: "Lúc 3:30 chiều. Lên máy bay bắt đầu lúc 3:00." },
                  { who: "A", s: "Is there a delay?", ipa: "/ɪz ðɛr ə dɪˈleɪ/", vn: "Có bị trễ không?" },
                  { who: "B", s: "No, it's on time.", ipa: "/noʊ ɪts ɑːn taɪm/", vn: "Không, đúng giờ." },
                  { who: "A", s: "Where is the gate?", ipa: "/wɛr ɪz ðə ɡeɪt/", vn: "Cửa ra máy bay ở đâu?" },
                  { who: "B", s: "Gate 12, after security.", ipa: "/ɡeɪt twɛlv ˈæftər sɪˈkjʊrəti/", vn: "Cửa 12, sau khu an ninh." }
            ]
      },
      {
            id: 44,
            title: "At the Bank",
            turns: [
                  { who: "A", s: "Hello, I'd like to open a bank account.", ipa: "/həˈloʊ aɪd laɪk tə ˈoʊpən ə bæŋk əˈkaʊnt/", vn: "Xin chào, tôi muốn mở tài khoản ngân hàng." },
                  { who: "B", s: "Sure, what type of account?", ipa: "/ʃʊr wʌt taɪp əv əˈkaʊnt/", vn: "Chắc chắn, loại tài khoản gì?" },
                  { who: "A", s: "A savings account, please.", ipa: "/ə ˈseɪvɪŋz əˈkaʊnt pliz/", vn: "Tài khoản tiết kiệm, làm ơn." },
                  { who: "B", s: "You'll need ID and initial deposit.", ipa: "/jʊl nid aɪˈdiː ænd ɪˈnɪʃəl dɪˈpɑːzɪt/", vn: "Bạn cần ID và tiền gửi ban đầu." },
                  { who: "A", s: "How much is the minimum deposit?", ipa: "/haʊ mʌtʃ ɪz ðə ˈmɪnɪməm dɪˈpɑːzɪt/", vn: "Tiền gửi tối thiểu là bao nhiêu?" },
                  { who: "B", s: "Fifty dollars.", ipa: "/ˈfɪfti ˈdɑːlərz/", vn: "Năm mươi đô la." },
                  { who: "A", s: "Can I get a debit card?", ipa: "/kæn aɪ ɡɛt ə ˈdɛbɪt kɑːrd/", vn: "Tôi có thể có thẻ ghi nợ không?" },
                  { who: "B", s: "Yes, it's included.", ipa: "/jɛs ɪts ɪnˈkluːdɪd/", vn: "Vâng, nó được bao gồm." },
                  { who: "A", s: "How long does it take?", ipa: "/haʊ lɔːŋ dʌz ɪt teɪk/", vn: "Mất bao lâu?" },
                  { who: "B", s: "About two weeks for the card.", ipa: "/əˈbaʊt tuː wiks fər ðə kɑːrd/", vn: "Khoảng hai tuần cho thẻ." }
            ]
      },
      {
            id: 45,
            title: "At the Bank",
            turns: [
                  { who: "A", s: "Hello, I'd like to open a bank account.", ipa: "/həˈloʊ aɪd laɪk tə ˈoʊpən ə bæŋk əˈkaʊnt/", vn: "Xin chào, tôi muốn mở tài khoản ngân hàng." },
                  { who: "B", s: "Sure, what type of account?", ipa: "/ʃʊr wʌt taɪp əv əˈkaʊnt/", vn: "Chắc chắn, loại tài khoản gì?" },
                  { who: "A", s: "A savings account, please.", ipa: "/ə ˈseɪvɪŋz əˈkaʊnt pliz/", vn: "Tài khoản tiết kiệm, làm ơn." },
                  { who: "B", s: "You'll need ID and initial deposit.", ipa: "/jʊl nid aɪˈdiː ænd ɪˈnɪʃəl dɪˈpɑːzɪt/", vn: "Bạn cần ID và tiền gửi ban đầu." },
                  { who: "A", s: "How much is the minimum deposit?", ipa: "/haʊ mʌtʃ ɪz ðə ˈmɪnɪməm dɪˈpɑːzɪt/", vn: "Tiền gửi tối thiểu là bao nhiêu?" },
                  { who: "B", s: "Fifty dollars.", ipa: "/ˈfɪfti ˈdɑːlərz/", vn: "Năm mươi đô la." },
                  { who: "A", s: "Can I get a debit card?", ipa: "/kæn aɪ ɡɛt ə ˈdɛbɪt kɑːrd/", vn: "Tôi có thể có thẻ ghi nợ không?" },
                  { who: "B", s: "Yes, it's included.", ipa: "/jɛs ɪts ɪnˈkluːdɪd/", vn: "Vâng, nó được bao gồm." },
                  { who: "A", s: "How long does it take?", ipa: "/haʊ lɔːŋ dʌz ɪt teɪk/", vn: "Mất bao lâu?" },
                  { who: "B", s: "About two weeks for the card.", ipa: "/əˈbaʊt tuː wiks fər ðə kɑːrd/", vn: "Khoảng hai tuần cho thẻ." }
            ]
      },
      {
            id: 46,
            title: "At the Doctor's Office",
            turns: [
                  { who: "B", s: "Good afternoon. What's your problem today?", ipa: "/ɡʊd ˌæftərˈnuːn wʌts jʊr ˈprɑːbləm təˈdeɪ/", vn: "Chào buổi chiều. Vấn đề của bạn hôm nay là gì?" },
                  { who: "A", s: "I have a headache and a fever.", ipa: "/aɪ hæv ə ˈhɛdeɪk ænd ə ˈfiːvər/", vn: "Tôi bị đau đầu và sốt." },
                  { who: "B", s: "How long have you felt like this?", ipa: "/haʊ lɔːŋ hæv juː fɛlt laɪk ðɪs/", vn: "Bạn cảm thấy như vậy được bao lâu rồi?" },
                  { who: "A", s: "Since yesterday morning.", ipa: "/sɪns ˈjɛstərdeɪ ˈmɔːrnɪŋ/", vn: "Từ sáng hôm qua." },
                  { who: "B", s: "Let me check your temperature.", ipa: "/lɛt miː tʃɛk jʊr ˈtɛmpərətʃər/", vn: "Để tôi kiểm tra nhiệt độ của bạn." },
                  { who: "A", s: "Is it serious?", ipa: "/ɪz ɪt ˈsɪriəs/", vn: "Có nghiêm trọng không?" },
                  { who: "B", s: "No, it's just a cold. You need to rest.", ipa: "/noʊ ɪts dʒʌst ə koʊld juː nid tə rɛst/", vn: "Không, chỉ là cảm lạnh thôi. Bạn cần nghỉ ngơi." },
                  { who: "A", s: "Should I take any medicine?", ipa: "/ʃʊd aɪ teɪk ˈɛni ˈmɛdɪsɪn/", vn: "Tôi có nên uống thuốc không?" },
                  { who: "B", s: "Yes, I'll give you a prescription.", ipa: "/jɛs aɪl ɡɪv juː ə prɪˈskrɪpʃən/", vn: "Vâng, tôi sẽ cho bạn đơn thuốc." },
                  { who: "A", s: "Thank you, doctor!", ipa: "/ˈθæŋk juː ˈdɑːktər/", vn: "Cảm ơn bác sĩ!" }
            ]
      },
      {
            id: 47,
            title: "At the Doctor's Office",
            turns: [
                  { who: "B", s: "Good afternoon. What's your problem today?", ipa: "/ɡʊd ˌæftərˈnuːn wʌts jʊr ˈprɑːbləm təˈdeɪ/", vn: "Chào buổi chiều. Vấn đề của bạn hôm nay là gì?" },
                  { who: "A", s: "I have a headache and a fever.", ipa: "/aɪ hæv ə ˈhɛdeɪk ænd ə ˈfiːvər/", vn: "Tôi bị đau đầu và sốt." },
                  { who: "B", s: "How long have you felt like this?", ipa: "/haʊ lɔːŋ hæv juː fɛlt laɪk ðɪs/", vn: "Bạn cảm thấy như vậy được bao lâu rồi?" },
                  { who: "A", s: "Since yesterday morning.", ipa: "/sɪns ˈjɛstərdeɪ ˈmɔːrnɪŋ/", vn: "Từ sáng hôm qua." },
                  { who: "B", s: "Let me check your temperature.", ipa: "/lɛt miː tʃɛk jʊr ˈtɛmpərətʃər/", vn: "Để tôi kiểm tra nhiệt độ của bạn." },
                  { who: "A", s: "Is it serious?", ipa: "/ɪz ɪt ˈsɪriəs/", vn: "Có nghiêm trọng không?" },
                  { who: "B", s: "No, it's just a cold. You need to rest.", ipa: "/noʊ ɪts dʒʌst ə koʊld juː nid tə rɛst/", vn: "Không, chỉ là cảm lạnh thôi. Bạn cần nghỉ ngơi." },
                  { who: "A", s: "Should I take any medicine?", ipa: "/ʃʊd aɪ teɪk ˈɛni ˈmɛdɪsɪn/", vn: "Tôi có nên uống thuốc không?" },
                  { who: "B", s: "Yes, I'll give you a prescription.", ipa: "/jɛs aɪl ɡɪv juː ə prɪˈskrɪpʃən/", vn: "Vâng, tôi sẽ cho bạn đơn thuốc." },
                  { who: "A", s: "Thank you, doctor!", ipa: "/ˈθæŋk juː ˈdɑːktər/", vn: "Cảm ơn bác sĩ!" }
            ]
      },
      {
            id: 48,
            title: "At the Doctor's Office",
            turns: [
                  { who: "B", s: "Good afternoon. What's your problem today?", ipa: "/ɡʊd ˌæftərˈnuːn wʌts jʊr ˈprɑːbləm təˈdeɪ/", vn: "Chào buổi chiều. Vấn đề của bạn hôm nay là gì?" },
                  { who: "A", s: "I have a headache and a fever.", ipa: "/aɪ hæv ə ˈhɛdeɪk ænd ə ˈfiːvər/", vn: "Tôi bị đau đầu và sốt." },
                  { who: "B", s: "How long have you felt like this?", ipa: "/haʊ lɔːŋ hæv juː fɛlt laɪk ðɪs/", vn: "Bạn cảm thấy như vậy được bao lâu rồi?" },
                  { who: "A", s: "Since yesterday morning.", ipa: "/sɪns ˈjɛstərdeɪ ˈmɔːrnɪŋ/", vn: "Từ sáng hôm qua." },
                  { who: "B", s: "Let me check your temperature.", ipa: "/lɛt miː tʃɛk jʊr ˈtɛmpərətʃər/", vn: "Để tôi kiểm tra nhiệt độ của bạn." },
                  { who: "A", s: "Is it serious?", ipa: "/ɪz ɪt ˈsɪriəs/", vn: "Có nghiêm trọng không?" },
                  { who: "B", s: "No, it's just a cold. You need to rest.", ipa: "/noʊ ɪts dʒʌst ə koʊld juː nid tə rɛst/", vn: "Không, chỉ là cảm lạnh thôi. Bạn cần nghỉ ngơi." },
                  { who: "A", s: "Should I take any medicine?", ipa: "/ʃʊd aɪ teɪk ˈɛni ˈmɛdɪsɪn/", vn: "Tôi có nên uống thuốc không?" },
                  { who: "B", s: "Yes, I'll give you a prescription.", ipa: "/jɛs aɪl ɡɪv juː ə prɪˈskrɪpʃən/", vn: "Vâng, tôi sẽ cho bạn đơn thuốc." },
                  { who: "A", s: "Thank you, doctor!", ipa: "/ˈθæŋk juː ˈdɑːktər/", vn: "Cảm ơn bác sĩ!" }
            ]
      },
      {
            id: 49,
            title: "At the Gym",
            turns: [
                  { who: "B", s: "Welcome to our gym! First time here?", ipa: "/ˈwɛlkəm tə aʊər dʒɪm fɜːrst taɪm hɪr/", vn: "Chào mừng đến phòng gym của chúng tôi! Lần đầu đến đây?" },
                  { who: "A", s: "Yes, I want to join the gym.", ipa: "/jɛs aɪ wɑːnt tə dʒɔɪn ðə dʒɪm/", vn: "Vâng, tôi muốn tham gia phòng gym." },
                  { who: "B", s: "Do you want a monthly or yearly membership?", ipa: "/duː juː wɑːnt ə ˈmʌnθli ɔːr ˈjɪrli ˈmɛmbərʃɪp/", vn: "Bạn muốn thẻ thành viên theo tháng hay theo năm?" },
                  { who: "A", s: "How much is the monthly membership?", ipa: "/haʊ mʌtʃ ɪz ðə ˈmʌnθli ˈmɛmbərʃɪp/", vn: "Thẻ thành viên hàng tháng giá bao nhiêu?" },
                  { who: "B", s: "It's thirty dollars per month.", ipa: "/ɪts ˈθɜːrdi ˈdɑːlərz pər mʌnθ/", vn: "Ba mươi đô la mỗi tháng." },
                  { who: "A", s: "Can I try it for one day first?", ipa: "/kæn aɪ traɪ ɪt fər wʌn deɪ fɜːrst/", vn: "Tôi có thể thử một ngày trước không?" },
                  { who: "B", s: "Yes, the trial is five dollars.", ipa: "/jɛs ðə ˈtraɪəl ɪz faɪv ˈdɑːlərz/", vn: "Vâng, dùng thử là năm đô la." },
                  { who: "A", s: "What time does the gym open?", ipa: "/wʌt taɪm dʌz ðə dʒɪm ˈoʊpən/", vn: "Phòng gym mở cửa lúc mấy giờ?" },
                  { who: "B", s: "We open at six in the morning.", ipa: "/wi ˈoʊpən æt sɪks ɪn ðə ˈmɔːrnɪŋ/", vn: "Chúng tôi mở cửa lúc sáu giờ sáng." },
                  { who: "A", s: "Perfect! I'll start tomorrow.", ipa: "/ˈpɜːrfɪkt aɪl stɑːrt təˈmɑːroʊ/", vn: "Hoàn hảo! Tôi sẽ bắt đầu vào ngày mai." }
            ]
      },
      {
            id: 50,
            title: "At the Gym",
            turns: [
                  { who: "B", s: "Welcome to our gym! First time here?", ipa: "/ˈwɛlkəm tə aʊər dʒɪm fɜːrst taɪm hɪr/", vn: "Chào mừng đến phòng gym của chúng tôi! Lần đầu đến đây?" },
                  { who: "A", s: "Yes, I want to join the gym.", ipa: "/jɛs aɪ wɑːnt tə dʒɔɪn ðə dʒɪm/", vn: "Vâng, tôi muốn tham gia phòng gym." },
                  { who: "B", s: "Do you want a monthly or yearly membership?", ipa: "/duː juː wɑːnt ə ˈmʌnθli ɔːr ˈjɪrli ˈmɛmbərʃɪp/", vn: "Bạn muốn thẻ thành viên theo tháng hay theo năm?" },
                  { who: "A", s: "How much is the monthly membership?", ipa: "/haʊ mʌtʃ ɪz ðə ˈmʌnθli ˈmɛmbərʃɪp/", vn: "Thẻ thành viên hàng tháng giá bao nhiêu?" },
                  { who: "B", s: "It's thirty dollars per month.", ipa: "/ɪts ˈθɜːrdi ˈdɑːlərz pər mʌnθ/", vn: "Ba mươi đô la mỗi tháng." },
                  { who: "A", s: "Can I try it for one day first?", ipa: "/kæn aɪ traɪ ɪt fər wʌn deɪ fɜːrst/", vn: "Tôi có thể thử một ngày trước không?" },
                  { who: "B", s: "Yes, the trial is five dollars.", ipa: "/jɛs ðə ˈtraɪəl ɪz faɪv ˈdɑːlərz/", vn: "Vâng, dùng thử là năm đô la." },
                  { who: "A", s: "What time does the gym open?", ipa: "/wʌt taɪm dʌz ðə dʒɪm ˈoʊpən/", vn: "Phòng gym mở cửa lúc mấy giờ?" },
                  { who: "B", s: "We open at six in the morning.", ipa: "/wi ˈoʊpən æt sɪks ɪn ðə ˈmɔːrnɪŋ/", vn: "Chúng tôi mở cửa lúc sáu giờ sáng." },
                  { who: "A", s: "Perfect! I'll start tomorrow.", ipa: "/ˈpɜːrfɪkt aɪl stɑːrt təˈmɑːroʊ/", vn: "Hoàn hảo! Tôi sẽ bắt đầu vào ngày mai." }
            ]
      },
      {
            id: 51,
            title: "At the Gym",
            turns: [
                  { who: "B", s: "Welcome to our gym! First time here?", ipa: "/ˈwɛlkəm tə aʊər dʒɪm fɜːrst taɪm hɪr/", vn: "Chào mừng đến phòng gym của chúng tôi! Lần đầu đến đây?" },
                  { who: "A", s: "Yes, I want to join the gym.", ipa: "/jɛs aɪ wɑːnt tə dʒɔɪn ðə dʒɪm/", vn: "Vâng, tôi muốn tham gia phòng gym." },
                  { who: "B", s: "Do you want a monthly or yearly membership?", ipa: "/duː juː wɑːnt ə ˈmʌnθli ɔːr ˈjɪrli ˈmɛmbərʃɪp/", vn: "Bạn muốn thẻ thành viên theo tháng hay theo năm?" },
                  { who: "A", s: "How much is the monthly membership?", ipa: "/haʊ mʌtʃ ɪz ðə ˈmʌnθli ˈmɛmbərʃɪp/", vn: "Thẻ thành viên hàng tháng giá bao nhiêu?" },
                  { who: "B", s: "It's thirty dollars per month.", ipa: "/ɪts ˈθɜːrdi ˈdɑːlərz pər mʌnθ/", vn: "Ba mươi đô la mỗi tháng." },
                  { who: "A", s: "Can I try it for one day first?", ipa: "/kæn aɪ traɪ ɪt fər wʌn deɪ fɜːrst/", vn: "Tôi có thể thử một ngày trước không?" },
                  { who: "B", s: "Yes, the trial is five dollars.", ipa: "/jɛs ðə ˈtraɪəl ɪz faɪv ˈdɑːlərz/", vn: "Vâng, dùng thử là năm đô la." },
                  { who: "A", s: "What time does the gym open?", ipa: "/wʌt taɪm dʌz ðə dʒɪm ˈoʊpən/", vn: "Phòng gym mở cửa lúc mấy giờ?" },
                  { who: "B", s: "We open at six in the morning.", ipa: "/wi ˈoʊpən æt sɪks ɪn ðə ˈmɔːrnɪŋ/", vn: "Chúng tôi mở cửa lúc sáu giờ sáng." },
                  { who: "A", s: "Perfect! I'll start tomorrow.", ipa: "/ˈpɜːrfɪkt aɪl stɑːrt təˈmɑːroʊ/", vn: "Hoàn hảo! Tôi sẽ bắt đầu vào ngày mai." }
            ]
      },
      {
            id: 52,
            title: "At the Hotel Reception",
            turns: [
                  { who: "A", s: "Hello, I have a reservation.", ipa: "/həˈloʊ aɪ hæv ə ˌrɛzərˈveɪʃən/", vn: "Xin chào, tôi có đặt phòng." },
                  { who: "B", s: "Name and check-in time?", ipa: "/neɪm ænd tʃɛkˈɪn taɪm/", vn: "Tên và giờ check-in?" },
                  { who: "A", s: "John Smith, for today.", ipa: "/dʒɑːn smɪθ fər təˈdeɪ/", vn: "John Smith, cho hôm nay." },
                  { who: "B", s: "Here's your key, room 205.", ipa: "/hɪrz jʊr kiː rum tuː ˈoʊ faɪv/", vn: "Đây là chìa khóa, phòng 205." },
                  { who: "A", s: "Is breakfast included?", ipa: "/ɪz ˈbrɛkfəst ɪnˈkluːdɪd/", vn: "Bữa sáng có bao gồm không?" },
                  { who: "B", s: "Yes, from 7 to 10 AM.", ipa: "/jɛs frəm ˈsɛvən tə tɛn eɪ ˈɛm/", vn: "Vâng, từ 7 đến 10 sáng." },
                  { who: "A", s: "Where is the elevator?", ipa: "/wɛr ɪz ði ˈɛləˌveɪtər/", vn: "Thang máy ở đâu?" },
                  { who: "B", s: "To your left.", ipa: "/tə jʊr lɛft/", vn: "Bên trái bạn." },
                  { who: "A", s: "Thank you very much.", ipa: "/ˈθæŋk juː ˈvɛri mʌtʃ/", vn: "Cảm ơn rất nhiều." },
                  { who: "B", s: "Enjoy your stay!", ipa: "/ɪnˈdʒɔɪ jʊr steɪ/", vn: "Chúc bạn nghỉ ngơi vui vẻ!" }
            ]
      },
      {
            id: 53,
            title: "At the Hotel Reception",
            turns: [
                  { who: "A", s: "Hello, I have a reservation.", ipa: "/həˈloʊ aɪ hæv ə ˌrɛzərˈveɪʃən/", vn: "Xin chào, tôi có đặt phòng." },
                  { who: "B", s: "Name and check-in time?", ipa: "/neɪm ænd tʃɛkˈɪn taɪm/", vn: "Tên và giờ check-in?" },
                  { who: "A", s: "John Smith, for today.", ipa: "/dʒɑːn smɪθ fər təˈdeɪ/", vn: "John Smith, cho hôm nay." },
                  { who: "B", s: "Here's your key, room 205.", ipa: "/hɪrz jʊr kiː rum tuː ˈoʊ faɪv/", vn: "Đây là chìa khóa, phòng 205." },
                  { who: "A", s: "Is breakfast included?", ipa: "/ɪz ˈbrɛkfəst ɪnˈkluːdɪd/", vn: "Bữa sáng có bao gồm không?" },
                  { who: "B", s: "Yes, from 7 to 10 AM.", ipa: "/jɛs frəm ˈsɛvən tə tɛn eɪ ˈɛm/", vn: "Vâng, từ 7 đến 10 sáng." },
                  { who: "A", s: "Where is the elevator?", ipa: "/wɛr ɪz ði ˈɛləˌveɪtər/", vn: "Thang máy ở đâu?" },
                  { who: "B", s: "To your left.", ipa: "/tə jʊr lɛft/", vn: "Bên trái bạn." },
                  { who: "A", s: "Thank you very much.", ipa: "/ˈθæŋk juː ˈvɛri mʌtʃ/", vn: "Cảm ơn rất nhiều." },
                  { who: "B", s: "Enjoy your stay!", ipa: "/ɪnˈdʒɔɪ jʊr steɪ/", vn: "Chúc bạn nghỉ ngơi vui vẻ!" }
            ]
      },
      {
            id: 54,
            title: "At the Library",
            turns: [
                  { who: "B", s: "Good morning! How can I help you?", ipa: "/ɡʊd ˈmɔːrnɪŋ haʊ kæn aɪ hɛlp juː/", vn: "Chào buổi sáng! Tôi có thể giúp gì cho bạn?" },
                  { who: "A", s: "I'm looking for English books.", ipa: "/aɪm ˈlʊkɪŋ fər ˈɪŋɡlɪʃ bʊks/", vn: "Tôi đang tìm sách tiếng Anh." },
                  { who: "B", s: "What level are you looking for?", ipa: "/wʌt ˈlɛvəl ɑːr juː ˈlʊkɪŋ fər/", vn: "Bạn đang tìm trình độ nào?" },
                  { who: "A", s: "Beginner level, please.", ipa: "/bɪˈɡɪnər ˈlɛvəl pliz/", vn: "Trình độ sơ cấp, làm ơn." },
                  { who: "B", s: "They're on the second floor.", ipa: "/ðɛr ɑːn ðə ˈsɛkənd flɔːr/", vn: "Chúng ở tầng hai." },
                  { who: "A", s: "Can I borrow three books?", ipa: "/kæn aɪ ˈbɑːroʊ θriː bʊks/", vn: "Tôi có thể mượn ba cuốn sách không?" },
                  { who: "B", s: "Yes, but you need a library card.", ipa: "/jɛs bʌt juː nid ə ˈlaɪbrɛri kɑːrd/", vn: "Vâng, nhưng bạn cần thẻ thư viện." },
                  { who: "A", s: "How can I get a card?", ipa: "/haʊ kæn aɪ ɡɛt ə kɑːrd/", vn: "Làm thế nào tôi có thể có thẻ?" },
                  { who: "B", s: "Fill out this form and bring your ID.", ipa: "/fɪl aʊt ðɪs fɔːrm ænd brɪŋ jʊr aɪˈdiː/", vn: "Điền vào mẫu này và mang giấy tờ tùy thân của bạn." },
                  { who: "A", s: "Okay, thank you!", ipa: "/oʊˈkeɪ ˈθæŋk juː/", vn: "Được rồi, cảm ơn!" }
            ]
      },
      {
            id: 55,
            title: "At the Library",
            turns: [
                  { who: "B", s: "Good morning! How can I help you?", ipa: "/ɡʊd ˈmɔːrnɪŋ haʊ kæn aɪ hɛlp juː/", vn: "Chào buổi sáng! Tôi có thể giúp gì cho bạn?" },
                  { who: "A", s: "I'm looking for English books.", ipa: "/aɪm ˈlʊkɪŋ fər ˈɪŋɡlɪʃ bʊks/", vn: "Tôi đang tìm sách tiếng Anh." },
                  { who: "B", s: "What level are you looking for?", ipa: "/wʌt ˈlɛvəl ɑːr juː ˈlʊkɪŋ fər/", vn: "Bạn đang tìm trình độ nào?" },
                  { who: "A", s: "Beginner level, please.", ipa: "/bɪˈɡɪnər ˈlɛvəl pliz/", vn: "Trình độ sơ cấp, làm ơn." },
                  { who: "B", s: "They're on the second floor.", ipa: "/ðɛr ɑːn ðə ˈsɛkənd flɔːr/", vn: "Chúng ở tầng hai." },
                  { who: "A", s: "Can I borrow three books?", ipa: "/kæn aɪ ˈbɑːroʊ θriː bʊks/", vn: "Tôi có thể mượn ba cuốn sách không?" },
                  { who: "B", s: "Yes, but you need a library card.", ipa: "/jɛs bʌt juː nid ə ˈlaɪbrɛri kɑːrd/", vn: "Vâng, nhưng bạn cần thẻ thư viện." },
                  { who: "A", s: "How can I get a card?", ipa: "/haʊ kæn aɪ ɡɛt ə kɑːrd/", vn: "Làm thế nào tôi có thể có thẻ?" },
                  { who: "B", s: "Fill out this form and bring your ID.", ipa: "/fɪl aʊt ðɪs fɔːrm ænd brɪŋ jʊr aɪˈdiː/", vn: "Điền vào mẫu này và mang giấy tờ tùy thân của bạn." },
                  { who: "A", s: "Okay, thank you!", ipa: "/oʊˈkeɪ ˈθæŋk juː/", vn: "Được rồi, cảm ơn!" }
            ]
      },
      {
            id: 56,
            title: "At the Library",
            turns: [
                  { who: "B", s: "Good morning! How can I help you?", ipa: "/ɡʊd ˈmɔːrnɪŋ haʊ kæn aɪ hɛlp juː/", vn: "Chào buổi sáng! Tôi có thể giúp gì cho bạn?" },
                  { who: "A", s: "I'm looking for English books.", ipa: "/aɪm ˈlʊkɪŋ fər ˈɪŋɡlɪʃ bʊks/", vn: "Tôi đang tìm sách tiếng Anh." },
                  { who: "B", s: "What level are you looking for?", ipa: "/wʌt ˈlɛvəl ɑːr juː ˈlʊkɪŋ fər/", vn: "Bạn đang tìm trình độ nào?" },
                  { who: "A", s: "Beginner level, please.", ipa: "/bɪˈɡɪnər ˈlɛvəl pliz/", vn: "Trình độ sơ cấp, làm ơn." },
                  { who: "B", s: "They're on the second floor.", ipa: "/ðɛr ɑːn ðə ˈsɛkənd flɔːr/", vn: "Chúng ở tầng hai." },
                  { who: "A", s: "Can I borrow three books?", ipa: "/kæn aɪ ˈbɑːroʊ θriː bʊks/", vn: "Tôi có thể mượn ba cuốn sách không?" },
                  { who: "B", s: "Yes, but you need a library card.", ipa: "/jɛs bʌt juː nid ə ˈlaɪbrɛri kɑːrd/", vn: "Vâng, nhưng bạn cần thẻ thư viện." },
                  { who: "A", s: "How can I get a card?", ipa: "/haʊ kæn aɪ ɡɛt ə kɑːrd/", vn: "Làm thế nào tôi có thể có thẻ?" },
                  { who: "B", s: "Fill out this form and bring your ID.", ipa: "/fɪl aʊt ðɪs fɔːrm ænd brɪŋ jʊr aɪˈdiː/", vn: "Điền vào mẫu này và mang giấy tờ tùy thân của bạn." },
                  { who: "A", s: "Okay, thank you!", ipa: "/oʊˈkeɪ ˈθæŋk juː/", vn: "Được rồi, cảm ơn!" }
            ]
      },
      {
            id: 57,
            title: "At the Post Office",
            turns: [
                  { who: "A", s: "Hi, I need to send a package.", ipa: "/haɪ aɪ nid tə sɛnd ə ˈpækɪdʒ/", vn: "Chào, tôi cần gửi một gói hàng." },
                  { who: "B", s: "Domestic or international?", ipa: "/dəˈmɛstɪk ɔːr ˌɪntərˈnæʃənəl/", vn: "Trong nước hay quốc tế?" },
                  { who: "A", s: "International, to Vietnam.", ipa: "/ˌɪntərˈnæʃənəl tə viˌɛtˈnɑːm/", vn: "Quốc tế, đến Việt Nam." },
                  { who: "B", s: "Weight and size?", ipa: "/weɪt ænd saɪz/", vn: "Trọng lượng và kích thước?" },
                  { who: "A", s: "About 2 kg, small box.", ipa: "/əˈbaʊt tuː ˈkiːləˌɡræmz smɔːl bɑːks/", vn: "Khoảng 2 kg, hộp nhỏ." },
                  { who: "B", s: "That'll cost $25.", ipa: "/ðætl kɑːst ˈtwɛnti faɪv ˈdɑːlərz/", vn: "Sẽ tốn 25 đô." },
                  { who: "A", s: "How long will it take?", ipa: "/haʊ lɔːŋ wɪl ɪt teɪk/", vn: "Sẽ mất bao lâu?" },
                  { who: "B", s: "About 10-14 days.", ipa: "/əˈbaʊt tɛn tə ˈfɔːrˈtin deɪz/", vn: "Khoảng 10-14 ngày." },
                  { who: "A", s: "Can I track it?", ipa: "/kæn aɪ træk ɪt/", vn: "Tôi có thể theo dõi không?" },
                  { who: "B", s: "Yes, with this number.", ipa: "/jɛs wɪð ðɪs ˈnʌmbər/", vn: "Vâng, với số này." }
            ]
      },
      {
            id: 58,
            title: "At the Post Office",
            turns: [
                  { who: "A", s: "Hi, I need to send a package.", ipa: "/haɪ aɪ nid tə sɛnd ə ˈpækɪdʒ/", vn: "Chào, tôi cần gửi một gói hàng." },
                  { who: "B", s: "Domestic or international?", ipa: "/dəˈmɛstɪk ɔːr ˌɪntərˈnæʃənəl/", vn: "Trong nước hay quốc tế?" },
                  { who: "A", s: "International, to Vietnam.", ipa: "/ˌɪntərˈnæʃənəl tə viˌɛtˈnɑːm/", vn: "Quốc tế, đến Việt Nam." },
                  { who: "B", s: "Weight and size?", ipa: "/weɪt ænd saɪz/", vn: "Trọng lượng và kích thước?" },
                  { who: "A", s: "About 2 kg, small box.", ipa: "/əˈbaʊt tuː ˈkiːləˌɡræmz smɔːl bɑːks/", vn: "Khoảng 2 kg, hộp nhỏ." },
                  { who: "B", s: "That'll cost $25.", ipa: "/ðætl kɑːst ˈtwɛnti faɪv ˈdɑːlərz/", vn: "Sẽ tốn 25 đô." },
                  { who: "A", s: "How long will it take?", ipa: "/haʊ lɔːŋ wɪl ɪt teɪk/", vn: "Sẽ mất bao lâu?" },
                  { who: "B", s: "About 10-14 days.", ipa: "/əˈbaʊt tɛn tə ˈfɔːrˈtin deɪz/", vn: "Khoảng 10-14 ngày." },
                  { who: "A", s: "Can I track it?", ipa: "/kæn aɪ træk ɪt/", vn: "Tôi có thể theo dõi không?" },
                  { who: "B", s: "Yes, with this number.", ipa: "/jɛs wɪð ðɪs ˈnʌmbər/", vn: "Vâng, với số này." }
            ]
      },
      {
            id: 59,
            title: "At the Restaurant",
            turns: [
                  { who: "A", s: "Hello! Do you have a table for two?", ipa: "/həˈloʊ duː juː hæv ə ˈteɪbəl fər tuː/", vn: "Xin chào! Bạn có bàn cho hai người không?" },
                  { who: "B", s: "Yes, please follow me.", ipa: "/jɛs pliːz ˈfɑːloʊ miː/", vn: "Có, xin hãy theo tôi." },
                  { who: "A", s: "Thank you. Can I see the menu?", ipa: "/ˈθæŋk juː kæn aɪ siː ðə ˈmɛnjuː/", vn: "Cảm ơn. Tôi có thể xem thực đơn không?" },
                  { who: "B", s: "Here you are. What would you like to drink?", ipa: "/hɪr juː ɑːr wʌt wʊd juː laɪk tə drɪŋk/", vn: "Của bạn đây. Bạn muốn uống gì?" },
                  { who: "A", s: "I'd like orange juice, please.", ipa: "/aɪd laɪk ˈɔːrɪndʒ dʒuːs pliːz/", vn: "Tôi muốn nước cam, làm ơn." },
                  { who: "B", s: "And for food?", ipa: "/ænd fər fuːd/", vn: "Còn đồ ăn thì sao?" },
                  { who: "A", s: "I'll have the chicken salad.", ipa: "/aɪl hæv ðə ˈtʃɪkɪn ˈsæləd/", vn: "Tôi sẽ lấy salad gà." },
                  { who: "B", s: "Would you like anything else?", ipa: "/wʊd juː laɪk ˈeniˌθɪŋ ɛls/", vn: "Bạn có muốn gì khác không?" },
                  { who: "A", s: "No, that's all. Thank you!", ipa: "/noʊ ðæts ɔːl ˈθæŋk juː/", vn: "Không, chỉ vậy thôi. Cảm ơn!" },
                  { who: "B", s: "Your order will be ready soon.", ipa: "/jʊr ˈɔːrdər wɪl bi ˈrɛdi suːn/", vn: "Đơn hàng của bạn sẽ sẵn sàng sớm thôi." }
            ]
      },
      {
            id: 60,
            title: "At the Restaurant",
            turns: [
                  { who: "A", s: "Hello! Do you have a table for two?", ipa: "/həˈloʊ duː juː hæv ə ˈteɪbəl fər tuː/", vn: "Xin chào! Bạn có bàn cho hai người không?" },
                  { who: "B", s: "Yes, please follow me.", ipa: "/jɛs pliːz ˈfɑːloʊ miː/", vn: "Có, xin hãy theo tôi." },
                  { who: "A", s: "Thank you. Can I see the menu?", ipa: "/ˈθæŋk juː kæn aɪ siː ðə ˈmɛnjuː/", vn: "Cảm ơn. Tôi có thể xem thực đơn không?" },
                  { who: "B", s: "Here you are. What would you like to drink?", ipa: "/hɪr juː ɑːr wʌt wʊd juː laɪk tə drɪŋk/", vn: "Của bạn đây. Bạn muốn uống gì?" },
                  { who: "A", s: "I'd like orange juice, please.", ipa: "/aɪd laɪk ˈɔːrɪndʒ dʒuːs pliːz/", vn: "Tôi muốn nước cam, làm ơn." },
                  { who: "B", s: "And for food?", ipa: "/ænd fər fuːd/", vn: "Còn đồ ăn thì sao?" },
                  { who: "A", s: "I'll have the chicken salad.", ipa: "/aɪl hæv ðə ˈtʃɪkɪn ˈsæləd/", vn: "Tôi sẽ lấy salad gà." },
                  { who: "B", s: "Would you like anything else?", ipa: "/wʊd juː laɪk ˈeniˌθɪŋ ɛls/", vn: "Bạn có muốn gì khác không?" },
                  { who: "A", s: "No, that's all. Thank you!", ipa: "/noʊ ðæts ɔːl ˈθæŋk juː/", vn: "Không, chỉ vậy thôi. Cảm ơn!" },
                  { who: "B", s: "Your order will be ready soon.", ipa: "/jʊr ˈɔːrdər wɪl bi ˈrɛdi suːn/", vn: "Đơn hàng của bạn sẽ sẵn sàng sớm thôi." }
            ]
      },
      {
            id: 61,
            title: "At the Restaurant",
            turns: [
                  { who: "A", s: "Hello! Do you have a table for two?", ipa: "/həˈloʊ duː juː hæv ə ˈteɪbəl fər tuː/", vn: "Xin chào! Bạn có bàn cho hai người không?" },
                  { who: "B", s: "Yes, please follow me.", ipa: "/jɛs pliːz ˈfɑːloʊ miː/", vn: "Có, xin hãy theo tôi." },
                  { who: "A", s: "Thank you. Can I see the menu?", ipa: "/ˈθæŋk juː kæn aɪ siː ðə ˈmɛnjuː/", vn: "Cảm ơn. Tôi có thể xem thực đơn không?" },
                  { who: "B", s: "Here you are. What would you like to drink?", ipa: "/hɪr juː ɑːr wʌt wʊd juː laɪk tə drɪŋk/", vn: "Của bạn đây. Bạn muốn uống gì?" },
                  { who: "A", s: "I'd like orange juice, please.", ipa: "/aɪd laɪk ˈɔːrɪndʒ dʒuːs pliːz/", vn: "Tôi muốn nước cam, làm ơn." },
                  { who: "B", s: "And for food?", ipa: "/ænd fər fuːd/", vn: "Còn đồ ăn thì sao?" },
                  { who: "A", s: "I'll have the chicken salad.", ipa: "/aɪl hæv ðə ˈtʃɪkɪn ˈsæləd/", vn: "Tôi sẽ lấy salad gà." },
                  { who: "B", s: "Would you like anything else?", ipa: "/wʊd juː laɪk ˈeniˌθɪŋ ɛls/", vn: "Bạn có muốn gì khác không?" },
                  { who: "A", s: "No, that's all. Thank you!", ipa: "/noʊ ðæts ɔːl ˈθæŋk juː/", vn: "Không, chỉ vậy thôi. Cảm ơn!" },
                  { who: "B", s: "Your order will be ready soon.", ipa: "/jʊr ˈɔːrdər wɪl bi ˈrɛdi suːn/", vn: "Đơn hàng của bạn sẽ sẵn sàng sớm thôi." }
            ]
      },
      {
            id: 62,
            title: "At the Supermarket",
            turns: [
                  { who: "A", s: "Excuse me, where is the milk?", ipa: "/ɪkˈskjuːz miː wɛr ɪz ðə mɪlk/", vn: "Xin lỗi, sữa ở đâu?" },
                  { who: "B", s: "It's in aisle five, on the left.", ipa: "/ɪts ɪn aɪl faɪv ɑːn ðə lɛft/", vn: "Nó ở lối đi số năm, bên trái." },
                  { who: "A", s: "Thank you! Do you have fresh bread?", ipa: "/ˈθæŋk juː duː juː hæv frɛʃ brɛd/", vn: "Cảm ơn! Bạn có bánh mì tươi không?" },
                  { who: "B", s: "Yes, at the bakery section.", ipa: "/jɛs æt ðə ˈbeɪkəri ˈsɛkʃən/", vn: "Có, ở khu bánh mì." },
                  { who: "A", s: "Where can I find vegetables?", ipa: "/wɛr kæn aɪ faɪnd ˈvɛdʒtəbəlz/", vn: "Tôi có thể tìm rau củ ở đâu?" },
                  { who: "B", s: "They're at the back of the store.", ipa: "/ðɛr æt ðə bæk əv ðə stɔːr/", vn: "Chúng ở phía sau của hàng." },
                  { who: "A", s: "Is there a discount today?", ipa: "/ɪz ðɛr ə ˈdɪskaʊnt təˈdeɪ/", vn: "Hôm nay có giảm giá không?" },
                  { who: "B", s: "Yes, twenty percent off on fruits.", ipa: "/jɛs ˈtwɛnti pərˈsɛnt ɔːf ɑːn fruts/", vn: "Có, giảm hai mươi phần trăm cho trái cây." },
                  { who: "A", s: "Great! Where do I pay?", ipa: "/ɡreɪt wɛr duː aɪ peɪ/", vn: "Tuyệt! Tôi thanh toán ở đâu?" },
                  { who: "B", s: "At the checkout counters at the front.", ipa: "/æt ðə ˈtʃɛkaʊt ˈkaʊntərz æt ðə frʌnt/", vn: "Ở quầy thanh toán phía trước." }
            ]
      },
      {
            id: 63,
            title: "At the Supermarket",
            turns: [
                  { who: "A", s: "Excuse me, where is the milk?", ipa: "/ɪkˈskjuːz miː wɛr ɪz ðə mɪlk/", vn: "Xin lỗi, sữa ở đâu?" },
                  { who: "B", s: "It's in aisle five, on the left.", ipa: "/ɪts ɪn aɪl faɪv ɑːn ðə lɛft/", vn: "Nó ở lối đi số năm, bên trái." },
                  { who: "A", s: "Thank you! Do you have fresh bread?", ipa: "/ˈθæŋk juː duː juː hæv frɛʃ brɛd/", vn: "Cảm ơn! Bạn có bánh mì tươi không?" },
                  { who: "B", s: "Yes, at the bakery section.", ipa: "/jɛs æt ðə ˈbeɪkəri ˈsɛkʃən/", vn: "Có, ở khu bánh mì." },
                  { who: "A", s: "Where can I find vegetables?", ipa: "/wɛr kæn aɪ faɪnd ˈvɛdʒtəbəlz/", vn: "Tôi có thể tìm rau củ ở đâu?" },
                  { who: "B", s: "They're at the back of the store.", ipa: "/ðɛr æt ðə bæk əv ðə stɔːr/", vn: "Chúng ở phía sau của hàng." },
                  { who: "A", s: "Is there a discount today?", ipa: "/ɪz ðɛr ə ˈdɪskaʊnt təˈdeɪ/", vn: "Hôm nay có giảm giá không?" },
                  { who: "B", s: "Yes, twenty percent off on fruits.", ipa: "/jɛs ˈtwɛnti pərˈsɛnt ɔːf ɑːn fruts/", vn: "Có, giảm hai mươi phần trăm cho trái cây." },
                  { who: "A", s: "Great! Where do I pay?", ipa: "/ɡreɪt wɛr duː aɪ peɪ/", vn: "Tuyệt! Tôi thanh toán ở đâu?" },
                  { who: "B", s: "At the checkout counters at the front.", ipa: "/æt ðə ˈtʃɛkaʊt ˈkaʊntərz æt ðə frʌnt/", vn: "Ở quầy thanh toán phía trước." }
            ]
      },
      {
            id: 64,
            title: "At the Supermarket",
            turns: [
                  { who: "A", s: "Excuse me, where is the milk?", ipa: "/ɪkˈskjuːz miː wɛr ɪz ðə mɪlk/", vn: "Xin lỗi, sữa ở đâu?" },
                  { who: "B", s: "It's in aisle five, on the left.", ipa: "/ɪts ɪn aɪl faɪv ɑːn ðə lɛft/", vn: "Nó ở lối đi số năm, bên trái." },
                  { who: "A", s: "Thank you! Do you have fresh bread?", ipa: "/ˈθæŋk juː duː juː hæv frɛʃ brɛd/", vn: "Cảm ơn! Bạn có bánh mì tươi không?" },
                  { who: "B", s: "Yes, at the bakery section.", ipa: "/jɛs æt ðə ˈbeɪkəri ˈsɛkʃən/", vn: "Có, ở khu bánh mì." },
                  { who: "A", s: "Where can I find vegetables?", ipa: "/wɛr kæn aɪ faɪnd ˈvɛdʒtəbəlz/", vn: "Tôi có thể tìm rau củ ở đâu?" },
                  { who: "B", s: "They're at the back of the store.", ipa: "/ðɛr æt ðə bæk əv ðə stɔːr/", vn: "Chúng ở phía sau của hàng." },
                  { who: "A", s: "Is there a discount today?", ipa: "/ɪz ðɛr ə ˈdɪskaʊnt təˈdeɪ/", vn: "Hôm nay có giảm giá không?" },
                  { who: "B", s: "Yes, twenty percent off on fruits.", ipa: "/jɛs ˈtwɛnti pərˈsɛnt ɔːf ɑːn fruts/", vn: "Có, giảm hai mươi phần trăm cho trái cây." },
                  { who: "A", s: "Great! Where do I pay?", ipa: "/ɡreɪt wɛr duː aɪ peɪ/", vn: "Tuyệt! Tôi thanh toán ở đâu?" },
                  { who: "B", s: "At the checkout counters at the front.", ipa: "/æt ðə ˈtʃɛkaʊt ˈkaʊntərz æt ðə frʌnt/", vn: "Ở quầy thanh toán phía trước." }
            ]
      },
      {
            id: 65,
            title: "Booking a Hotel Room",
            turns: [
                  { who: "A", s: "Hello, I'd like to book a room.", ipa: "/həˈloʊ aɪd laɪk tə bʊk ə rum/", vn: "Xin chào, tôi muốn đặt phòng." },
                  { who: "B", s: "For how many nights?", ipa: "/fər haʊ ˈmɛni naɪts/", vn: "Cho bao nhiêu đêm?" },
                  { who: "A", s: "Two nights, please.", ipa: "/tuː naɪts pliz/", vn: "Hai đêm, làm ơn." },
                  { who: "B", s: "Single or double room?", ipa: "/ˈsɪŋɡəl ɔːr ˈdʌbəl rum/", vn: "Phòng đơn hay phòng đôi?" },
                  { who: "A", s: "A double room with a bathroom.", ipa: "/ə ˈdʌbəl rum wɪð ə ˈbæθrum/", vn: "Phòng đôi có phòng tắm." },
                  { who: "B", s: "What date will you arrive?", ipa: "/wʌt deɪt wɪl juː əˈraɪv/", vn: "Bạn sẽ đến ngày nào?" },
                  { who: "A", s: "On May 15th.", ipa: "/ɑːn meɪ ˈfɪftiːnθ/", vn: "Ngày 15 tháng 5." },
                  { who: "B", s: "The room costs eighty dollars per night.", ipa: "/ðə rum kɑːsts ˈeɪti ˈdɑːlərz pər naɪt/", vn: "Phòng giá tám mươi đô la mỗi đêm." },
                  { who: "A", s: "That's fine. I'll take it.", ipa: "/ðæts faɪn aɪl teɪk ɪt/", vn: "Được. Tôi sẽ lấy nó." },
                  { who: "B", s: "Great! Can I have your name, please?", ipa: "/ɡreɪt kæn aɪ hæv jʊr neɪm pliz/", vn: "Tuyệt! Cho tôi xin tên của bạn được không?" }
            ]
      },
      {
            id: 66,
            title: "Booking a Hotel Room",
            turns: [
                  { who: "A", s: "Hello, I'd like to book a room.", ipa: "/həˈloʊ aɪd laɪk tə bʊk ə rum/", vn: "Xin chào, tôi muốn đặt phòng." },
                  { who: "B", s: "For how many nights?", ipa: "/fər haʊ ˈmɛni naɪts/", vn: "Cho bao nhiêu đêm?" },
                  { who: "A", s: "Two nights, please.", ipa: "/tuː naɪts pliz/", vn: "Hai đêm, làm ơn." },
                  { who: "B", s: "Single or double room?", ipa: "/ˈsɪŋɡəl ɔːr ˈdʌbəl rum/", vn: "Phòng đơn hay phòng đôi?" },
                  { who: "A", s: "A double room with a bathroom.", ipa: "/ə ˈdʌbəl rum wɪð ə ˈbæθrum/", vn: "Phòng đôi có phòng tắm." },
                  { who: "B", s: "What date will you arrive?", ipa: "/wʌt deɪt wɪl juː əˈraɪv/", vn: "Bạn sẽ đến ngày nào?" },
                  { who: "A", s: "On May 15th.", ipa: "/ɑːn meɪ ˈfɪftiːnθ/", vn: "Ngày 15 tháng 5." },
                  { who: "B", s: "The room costs eighty dollars per night.", ipa: "/ðə rum kɑːsts ˈeɪti ˈdɑːlərz pər naɪt/", vn: "Phòng giá tám mươi đô la mỗi đêm." },
                  { who: "A", s: "That's fine. I'll take it.", ipa: "/ðæts faɪn aɪl teɪk ɪt/", vn: "Được. Tôi sẽ lấy nó." },
                  { who: "B", s: "Great! Can I have your name, please?", ipa: "/ɡreɪt kæn aɪ hæv jʊr neɪm pliz/", vn: "Tuyệt! Cho tôi xin tên của bạn được không?" }
            ]
      },
      {
            id: 67,
            title: "Booking a Hotel Room",
            turns: [
                  { who: "A", s: "Hello, I'd like to book a room.", ipa: "/həˈloʊ aɪd laɪk tə bʊk ə rum/", vn: "Xin chào, tôi muốn đặt phòng." },
                  { who: "B", s: "For how many nights?", ipa: "/fər haʊ ˈmɛni naɪts/", vn: "Cho bao nhiêu đêm?" },
                  { who: "A", s: "Two nights, please.", ipa: "/tuː naɪts pliz/", vn: "Hai đêm, làm ơn." },
                  { who: "B", s: "Single or double room?", ipa: "/ˈsɪŋɡəl ɔːr ˈdʌbəl rum/", vn: "Phòng đơn hay phòng đôi?" },
                  { who: "A", s: "A double room with a bathroom.", ipa: "/ə ˈdʌbəl rum wɪð ə ˈbæθrum/", vn: "Phòng đôi có phòng tắm." },
                  { who: "B", s: "What date will you arrive?", ipa: "/wʌt deɪt wɪl juː əˈraɪv/", vn: "Bạn sẽ đến ngày nào?" },
                  { who: "A", s: "On May 15th.", ipa: "/ɑːn meɪ ˈfɪftiːnθ/", vn: "Ngày 15 tháng 5." },
                  { who: "B", s: "The room costs eighty dollars per night.", ipa: "/ðə rum kɑːsts ˈeɪti ˈdɑːlərz pər naɪt/", vn: "Phòng giá tám mươi đô la mỗi đêm." },
                  { who: "A", s: "That's fine. I'll take it.", ipa: "/ðæts faɪn aɪl teɪk ɪt/", vn: "Được. Tôi sẽ lấy nó." },
                  { who: "B", s: "Great! Can I have your name, please?", ipa: "/ɡreɪt kæn aɪ hæv jʊr neɪm pliz/", vn: "Tuyệt! Cho tôi xin tên của bạn được không?" }
            ]
      },
      {
            id: 68,
            title: "Buying Bus Tickets",
            turns: [
                  { who: "A", s: "Excuse me, where can I buy a bus ticket?", ipa: "/ɪkˈskjuːz miː wɛr kæn aɪ baɪ ə bʌs ˈtɪkɪt/", vn: "Xin lỗi, tôi có thể mua vé xe buýt ở đâu?" },
                  { who: "B", s: "At the ticket office over there.", ipa: "/æt ðə ˈtɪkɪt ˈɔfɪs ˈoʊvər ðɛr/", vn: "Ở quầy bán vé đằng kia." },
                  { who: "A", s: "I need a ticket to downtown.", ipa: "/aɪ nid ə ˈtɪkɪt tə ˈdaʊnˈtaʊn/", vn: "Tôi cần một vé đến trung tâm thành phố." },
                  { who: "B", s: "One way or round trip?", ipa: "/wʌn weɪ ɔːr raʊnd trɪp/", vn: "Một chiều hay khứ hồi?" },
                  { who: "A", s: "Round trip, please.", ipa: "/raʊnd trɪp pliz/", vn: "Khứ hồi, làm ơn." },
                  { who: "B", s: "That's five dollars.", ipa: "/ðæts faɪv ˈdɑːlərz/", vn: "Năm đô la." },
                  { who: "A", s: "What time does the bus leave?", ipa: "/wʌt taɪm dʌz ðə bʌs liv/", vn: "Xe buýt khởi hành lúc mấy giờ?" },
                  { who: "B", s: "At ten thirty from platform three.", ipa: "/æt tɛn ˈθɜːrdi frəm ˈplætfɔːrm θriː/", vn: "Lúc mười giờ ba mươi từ sân ga số ba." },
                  { who: "A", s: "Thank you for your help!", ipa: "/ˈθæŋk juː fər jʊr hɛlp/", vn: "Cảm ơn sự giúp đỡ của bạn!" },
                  { who: "B", s: "You're welcome. Have a nice trip!", ipa: "/jʊr ˈwɛlkəm hæv ə naɪs trɪp/", vn: "Không có gì. Chúc bạn có chuyến đi vui vẻ!" }
            ]
      },
      {
            id: 69,
            title: "Buying Bus Tickets",
            turns: [
                  { who: "A", s: "Excuse me, where can I buy a bus ticket?", ipa: "/ɪkˈskjuːz miː wɛr kæn aɪ baɪ ə bʌs ˈtɪkɪt/", vn: "Xin lỗi, tôi có thể mua vé xe buýt ở đâu?" },
                  { who: "B", s: "At the ticket office over there.", ipa: "/æt ðə ˈtɪkɪt ˈɔfɪs ˈoʊvər ðɛr/", vn: "Ở quầy bán vé đằng kia." },
                  { who: "A", s: "I need a ticket to downtown.", ipa: "/aɪ nid ə ˈtɪkɪt tə ˈdaʊnˈtaʊn/", vn: "Tôi cần một vé đến trung tâm thành phố." },
                  { who: "B", s: "One way or round trip?", ipa: "/wʌn weɪ ɔːr raʊnd trɪp/", vn: "Một chiều hay khứ hồi?" },
                  { who: "A", s: "Round trip, please.", ipa: "/raʊnd trɪp pliz/", vn: "Khứ hồi, làm ơn." },
                  { who: "B", s: "That's five dollars.", ipa: "/ðæts faɪv ˈdɑːlərz/", vn: "Năm đô la." },
                  { who: "A", s: "What time does the bus leave?", ipa: "/wʌt taɪm dʌz ðə bʌs liv/", vn: "Xe buýt khởi hành lúc mấy giờ?" },
                  { who: "B", s: "At ten thirty from platform three.", ipa: "/æt tɛn ˈθɜːrdi frəm ˈplætfɔːrm θriː/", vn: "Lúc mười giờ ba mươi từ sân ga số ba." },
                  { who: "A", s: "Thank you for your help!", ipa: "/ˈθæŋk juː fər jʊr hɛlp/", vn: "Cảm ơn sự giúp đỡ của bạn!" },
                  { who: "B", s: "You're welcome. Have a nice trip!", ipa: "/jʊr ˈwɛlkəm hæv ə naɪs trɪp/", vn: "Không có gì. Chúc bạn có chuyến đi vui vẻ!" }
            ]
      },
      {
            id: 70,
            title: "Buying Bus Tickets",
            turns: [
                  { who: "A", s: "Excuse me, where can I buy a bus ticket?", ipa: "/ɪkˈskjuːz miː wɛr kæn aɪ baɪ ə bʌs ˈtɪkɪt/", vn: "Xin lỗi, tôi có thể mua vé xe buýt ở đâu?" },
                  { who: "B", s: "At the ticket office over there.", ipa: "/æt ðə ˈtɪkɪt ˈɔfɪs ˈoʊvər ðɛr/", vn: "Ở quầy bán vé đằng kia." },
                  { who: "A", s: "I need a ticket to downtown.", ipa: "/aɪ nid ə ˈtɪkɪt tə ˈdaʊnˈtaʊn/", vn: "Tôi cần một vé đến trung tâm thành phố." },
                  { who: "B", s: "One way or round trip?", ipa: "/wʌn weɪ ɔːr raʊnd trɪp/", vn: "Một chiều hay khứ hồi?" },
                  { who: "A", s: "Round trip, please.", ipa: "/raʊnd trɪp pliz/", vn: "Khứ hồi, làm ơn." },
                  { who: "B", s: "That's five dollars.", ipa: "/ðæts faɪv ˈdɑːlərz/", vn: "Năm đô la." },
                  { who: "A", s: "What time does the bus leave?", ipa: "/wʌt taɪm dʌz ðə bʌs liv/", vn: "Xe buýt khởi hành lúc mấy giờ?" },
                  { who: "B", s: "At ten thirty from platform three.", ipa: "/æt tɛn ˈθɜːrdi frəm ˈplætfɔːrm θriː/", vn: "Lúc mười giờ ba mươi từ sân ga số ba." },
                  { who: "A", s: "Thank you for your help!", ipa: "/ˈθæŋk juː fər jʊr hɛlp/", vn: "Cảm ơn sự giúp đỡ của bạn!" },
                  { who: "B", s: "You're welcome. Have a nice trip!", ipa: "/jʊr ˈwɛlkəm hæv ə naɪs trɪp/", vn: "Không có gì. Chúc bạn có chuyến đi vui vẻ!" }
            ]
      },
      {
            id: 71,
            title: "Meeting a Friend",
            turns: [
                  { who: "A", s: "Hi Ben! How are you?", ipa: "/haɪ bɛn haʊ ɑːr juː/", vn: "Chào Ben! Bạn khỏe không?" },
                  { who: "B", s: "I'm fine, thank you! And you?", ipa: "/aɪm faɪn ˈθæŋk juː ənd juː/", vn: "Tôi khỏe, cảm ơn! Còn bạn?" },
                  { who: "A", s: "I'm great! What are you doing today?", ipa: "/aɪm ɡreɪt wʌt ɑːr juː ˈduːɪŋ təˈdeɪ/", vn: "Tôi rất tốt! Hôm nay bạn làm gì?" },
                  { who: "B", s: "I'm going to the park. Would you like to come?", ipa: "/aɪm ˈɡoʊɪŋ tə ðə pɑːrk wʊd juː laɪk tə kʌm/", vn: "Tôi đang đi công viên. Bạn có muốn đi cùng không?" },
                  { who: "A", s: "Yes, I'd love to! What time?", ipa: "/jɛs aɪd lʌv tuː wʌt taɪm/", vn: "Vâng, tôi rất muốn! Mấy giờ?" },
                  { who: "B", s: "At three o'clock. Is that okay?", ipa: "/ət θriː əˈklɒk ɪz ðæt oʊˈkeɪ/", vn: "Lúc ba giờ. Được không?" },
                  { who: "A", s: "That's perfect! Where should we meet?", ipa: "/ðæts ˈpɜːrfɪkt wɛr ʃʊd wiː miːt/", vn: "Hoàn hảo! Chúng ta nên gặp ở đâu?" },
                  { who: "B", s: "Let's meet at the park entrance.", ipa: "/lɛts miːt ət ðə pɑːrk ˈɛntrəns/", vn: "Gặp nhau ở lối vào công viên nhé." },
                  { who: "A", s: "Great! See you then!", ipa: "/ɡreɪt siː juː ðɛn/", vn: "Tuyệt! Hẹn gặp lại!" },
                  { who: "B", s: "See you later!", ipa: "/siː juː ˈleɪtər/", vn: "Hẹn gặp sau!" }
            ]
      },
      {
            id: 72,
            title: "Meeting a Friend",
            turns: [
                  { who: "A", s: "Hi Ben! How are you?", ipa: "/haɪ bɛn haʊ ɑːr juː/", vn: "Chào Ben! Bạn khỏe không?" },
                  { who: "B", s: "I'm fine, thank you! And you?", ipa: "/aɪm faɪn ˈθæŋk juː ənd juː/", vn: "Tôi khỏe, cảm ơn! Còn bạn?" },
                  { who: "A", s: "I'm great! What are you doing today?", ipa: "/aɪm ɡreɪt wʌt ɑːr juː ˈduːɪŋ təˈdeɪ/", vn: "Tôi rất tốt! Hôm nay bạn làm gì?" },
                  { who: "B", s: "I'm going to the park. Would you like to come?", ipa: "/aɪm ˈɡoʊɪŋ tə ðə pɑːrk wʊd juː laɪk tə kʌm/", vn: "Tôi đang đi công viên. Bạn có muốn đi cùng không?" },
                  { who: "A", s: "Yes, I'd love to! What time?", ipa: "/jɛs aɪd lʌv tuː wʌt taɪm/", vn: "Vâng, tôi rất muốn! Mấy giờ?" },
                  { who: "B", s: "At three o'clock. Is that okay?", ipa: "/ət θriː əˈklɒk ɪz ðæt oʊˈkeɪ/", vn: "Lúc ba giờ. Được không?" },
                  { who: "A", s: "That's perfect! Where should we meet?", ipa: "/ðæts ˈpɜːrfɪkt wɛr ʃʊd wiː miːt/", vn: "Hoàn hảo! Chúng ta nên gặp ở đâu?" },
                  { who: "B", s: "Let's meet at the park entrance.", ipa: "/lɛts miːt ət ðə pɑːrk ˈɛntrəns/", vn: "Gặp nhau ở lối vào công viên nhé." },
                  { who: "A", s: "Great! See you then!", ipa: "/ɡreɪt siː juː ðɛn/", vn: "Tuyệt! Hẹn gặp lại!" },
                  { who: "B", s: "See you later!", ipa: "/siː juː ˈleɪtər/", vn: "Hẹn gặp sau!" }
            ]
      },
      {
            id: 73,
            title: "Meeting a Friend",
            turns: [
                  { who: "A", s: "Hi Ben! How are you?", ipa: "/haɪ bɛn haʊ ɑːr juː/", vn: "Chào Ben! Bạn khỏe không?" },
                  { who: "B", s: "I'm fine, thank you! And you?", ipa: "/aɪm faɪn ˈθæŋk juː ənd juː/", vn: "Tôi khỏe, cảm ơn! Còn bạn?" },
                  { who: "A", s: "I'm great! What are you doing today?", ipa: "/aɪm ɡreɪt wʌt ɑːr juː ˈduːɪŋ təˈdeɪ/", vn: "Tôi rất tốt! Hôm nay bạn làm gì?" },
                  { who: "B", s: "I'm going to the park. Would you like to come?", ipa: "/aɪm ˈɡoʊɪŋ tə ðə pɑːrk wʊd juː laɪk tə kʌm/", vn: "Tôi đang đi công viên. Bạn có muốn đi cùng không?" },
                  { who: "A", s: "Yes, I'd love to! What time?", ipa: "/jɛs aɪd lʌv tuː wʌt taɪm/", vn: "Vâng, tôi rất muốn! Mấy giờ?" },
                  { who: "B", s: "At three o'clock. Is that okay?", ipa: "/ət θriː əˈklɒk ɪz ðæt oʊˈkeɪ/", vn: "Lúc ba giờ. Được không?" },
                  { who: "A", s: "That's perfect! Where should we meet?", ipa: "/ðæts ˈpɜːrfɪkt wɛr ʃʊd wiː miːt/", vn: "Hoàn hảo! Chúng ta nên gặp ở đâu?" },
                  { who: "B", s: "Let's meet at the park entrance.", ipa: "/lɛts miːt ət ðə pɑːrk ˈɛntrəns/", vn: "Gặp nhau ở lối vào công viên nhé." },
                  { who: "A", s: "Great! See you then!", ipa: "/ɡreɪt siː juː ðɛn/", vn: "Tuyệt! Hẹn gặp lại!" },
                  { who: "B", s: "See you later!", ipa: "/siː juː ˈleɪtər/", vn: "Hẹn gặp sau!" }
            ]
      },
      {
            id: 74,
            title: "Ordering Food",
            turns: [
                  { who: "A", s: "Hi, can I order some food?", ipa: "/haɪ kæn aɪ ˈɔːrdər sʌm fud/", vn: "Chào, tôi có thể gọi đồ ăn không?" },
                  { who: "B", s: "Yes, what would you like?", ipa: "/jɛs wʌt wʊd juː laɪk/", vn: "Vâng, bạn muốn gì?" },
                  { who: "A", s: "A pizza and a salad.", ipa: "/ə ˈpitsə ænd ə ˈsæləd/", vn: "Một pizza và một salad." },
                  { who: "B", s: "What toppings on the pizza?", ipa: "/wʌt ˈtɑːpɪŋz ɑːn ðə ˈpitsə/", vn: "Toppings gì trên pizza?" },
                  { who: "A", s: "Cheese and pepperoni.", ipa: "/tʃiz ænd ˌpɛpəˈroʊni/", vn: "Phô mai và pepperoni." },
                  { who: "B", s: "Anything to drink?", ipa: "/ˈɛnɪˌθɪŋ tə drɪŋk/", vn: "Uống gì không?" },
                  { who: "A", s: "A soda, please.", ipa: "/ə ˈsoʊdə pliz/", vn: "Một soda, làm ơn." },
                  { who: "B", s: "That'll be $15. Cash or card?", ipa: "/ðætl bi ˈfɪfˈtin ˈdɑːlərz kæʃ ɔːr kɑːrd/", vn: "Tổng cộng 15 đô. Tiền mặt hay thẻ?" },
                  { who: "A", s: "Card, please.", ipa: "/kɑːrd pliz/", vn: "Thẻ, làm ơn." },
                  { who: "B", s: "Thank you. Your order will be ready soon.", ipa: "/ˈθæŋk juː jʊr ˈɔːrdər wɪl bi ˈrɛdi sun/", vn: "Cảm ơn. Đơn hàng của bạn sẽ sẵn sàng sớm." }
            ]
      },
      {
            id: 75,
            title: "Ordering Food",
            turns: [
                  { who: "A", s: "Hi, can I order some food?", ipa: "/haɪ kæn aɪ ˈɔːrdər sʌm fud/", vn: "Chào, tôi có thể gọi đồ ăn không?" },
                  { who: "B", s: "Yes, what would you like?", ipa: "/jɛs wʌt wʊd juː laɪk/", vn: "Vâng, bạn muốn gì?" },
                  { who: "A", s: "A pizza and a salad.", ipa: "/ə ˈpitsə ænd ə ˈsæləd/", vn: "Một pizza và một salad." },
                  { who: "B", s: "What toppings on the pizza?", ipa: "/wʌt ˈtɑːpɪŋz ɑːn ðə ˈpitsə/", vn: "Toppings gì trên pizza?" },
                  { who: "A", s: "Cheese and pepperoni.", ipa: "/tʃiz ænd ˌpɛpəˈroʊni/", vn: "Phô mai và pepperoni." },
                  { who: "B", s: "Anything to drink?", ipa: "/ˈɛnɪˌθɪŋ tə drɪŋk/", vn: "Uống gì không?" },
                  { who: "A", s: "A soda, please.", ipa: "/ə ˈsoʊdə pliz/", vn: "Một soda, làm ơn." },
                  { who: "B", s: "That'll be $15. Cash or card?", ipa: "/ðætl bi ˈfɪfˈtin ˈdɑːlərz kæʃ ɔːr kɑːrd/", vn: "Tổng cộng 15 đô. Tiền mặt hay thẻ?" },
                  { who: "A", s: "Card, please.", ipa: "/kɑːrd pliz/", vn: "Thẻ, làm ơn." },
                  { who: "B", s: "Thank you. Your order will be ready soon.", ipa: "/ˈθæŋk juː jʊr ˈɔːrdər wɪl bi ˈrɛdi sun/", vn: "Cảm ơn. Đơn hàng của bạn sẽ sẵn sàng sớm." }
            ]
      },
      {
            id: 76,
            title: "Shopping for Clothes",
            turns: [
                  { who: "B", s: "Good morning! Can I help you?", ipa: "/ɡʊd ˈmɔːrnɪŋ kæn aɪ hɛlp juː/", vn: "Chào buổi sáng! Tôi có thể giúp gì cho bạn?" },
                  { who: "A", s: "Yes, I'm looking for a T-shirt.", ipa: "/jɛs aɪm ˈlʊkɪŋ fər ə ˈtiː ʃɜːrt/", vn: "Vâng, tôi đang tìm một chiếc áo thun." },
                  { who: "B", s: "What size do you need?", ipa: "/wʌt saɪz duː juː niːd/", vn: "Bạn cần size nào?" },
                  { who: "A", s: "Size M, please. Do you have it in blue?", ipa: "/saɪz ɛm pliːz duː juː hæv ɪt ɪn bluː/", vn: "Size M, làm ơn. Bạn có màu xanh không?" },
                  { who: "B", s: "Let me check. Yes, we have blue in M.", ipa: "/lɛt miː tʃɛk jɛs wiː hæv bluː ɪn ɛm/", vn: "Để tôi kiểm tra. Vâng, chúng tôi có màu xanh size M." },
                  { who: "A", s: "How much is it?", ipa: "/haʊ mʌtʃ ɪz ɪt/", vn: "Nó giá bao nhiêu?" },
                  { who: "B", s: "It's fifteen dollars.", ipa: "/ɪts ˈfɪftiːn ˈdɑːlərz/", vn: "Mười lăm đô la." },
                  { who: "A", s: "Can I try it on?", ipa: "/kæn aɪ traɪ ɪt ɒn/", vn: "Tôi có thể thử nó không?" },
                  { who: "B", s: "Of course. The fitting room is over there.", ipa: "/əv kɔːrs ðə ˈfɪtɪŋ ruːm ɪz ˈoʊvər ðɛr/", vn: "Tất nhiên. Phòng thử đồ ở đằng kia." },
                  { who: "A", s: "Perfect! I'll take it.", ipa: "/ˈpɜːrfɪkt aɪl teɪk ɪt/", vn: "Hoàn hảo! Tôi sẽ lấy nó." }
            ]
      },
      {
            id: 77,
            title: "Shopping for Clothes",
            turns: [
                  { who: "B", s: "Good morning! Can I help you?", ipa: "/ɡʊd ˈmɔːrnɪŋ kæn aɪ hɛlp juː/", vn: "Chào buổi sáng! Tôi có thể giúp gì cho bạn?" },
                  { who: "A", s: "Yes, I'm looking for a T-shirt.", ipa: "/jɛs aɪm ˈlʊkɪŋ fər ə ˈtiː ʃɜːrt/", vn: "Vâng, tôi đang tìm một chiếc áo thun." },
                  { who: "B", s: "What size do you need?", ipa: "/wʌt saɪz duː juː niːd/", vn: "Bạn cần size nào?" },
                  { who: "A", s: "Size M, please. Do you have it in blue?", ipa: "/saɪz ɛm pliːz duː juː hæv ɪt ɪn bluː/", vn: "Size M, làm ơn. Bạn có màu xanh không?" },
                  { who: "B", s: "Let me check. Yes, we have blue in M.", ipa: "/lɛt miː tʃɛk jɛs wiː hæv bluː ɪn ɛm/", vn: "Để tôi kiểm tra. Vâng, chúng tôi có màu xanh size M." },
                  { who: "A", s: "How much is it?", ipa: "/haʊ mʌtʃ ɪz ɪt/", vn: "Nó giá bao nhiêu?" },
                  { who: "B", s: "It's fifteen dollars.", ipa: "/ɪts ˈfɪftiːn ˈdɑːlərz/", vn: "Mười lăm đô la." },
                  { who: "A", s: "Can I try it on?", ipa: "/kæn aɪ traɪ ɪt ɒn/", vn: "Tôi có thể thử nó không?" },
                  { who: "B", s: "Of course. The fitting room is over there.", ipa: "/əv kɔːrs ðə ˈfɪtɪŋ ruːm ɪz ˈoʊvər ðɛr/", vn: "Tất nhiên. Phòng thử đồ ở đằng kia." },
                  { who: "A", s: "Perfect! I'll take it.", ipa: "/ˈpɜːrfɪkt aɪl teɪk ɪt/", vn: "Hoàn hảo! Tôi sẽ lấy nó." }
            ]
      },
      {
            id: 78,
            title: "Shopping for Clothes",
            turns: [
                  { who: "B", s: "Good morning! Can I help you?", ipa: "/ɡʊd ˈmɔːrnɪŋ kæn aɪ hɛlp juː/", vn: "Chào buổi sáng! Tôi có thể giúp gì cho bạn?" },
                  { who: "A", s: "Yes, I'm looking for a T-shirt.", ipa: "/jɛs aɪm ˈlʊkɪŋ fər ə ˈtiː ʃɜːrt/", vn: "Vâng, tôi đang tìm một chiếc áo thun." },
                  { who: "B", s: "What size do you need?", ipa: "/wʌt saɪz duː juː niːd/", vn: "Bạn cần size nào?" },
                  { who: "A", s: "Size M, please. Do you have it in blue?", ipa: "/saɪz ɛm pliːz duː juː hæv ɪt ɪn bluː/", vn: "Size M, làm ơn. Bạn có màu xanh không?" },
                  { who: "B", s: "Let me check. Yes, we have blue in M.", ipa: "/lɛt miː tʃɛk jɛs wiː hæv bluː ɪn ɛm/", vn: "Để tôi kiểm tra. Vâng, chúng tôi có màu xanh size M." },
                  { who: "A", s: "How much is it?", ipa: "/haʊ mʌtʃ ɪz ɪt/", vn: "Nó giá bao nhiêu?" },
                  { who: "B", s: "It's fifteen dollars.", ipa: "/ɪts ˈfɪftiːn ˈdɑːlərz/", vn: "Mười lăm đô la." },
                  { who: "A", s: "Can I try it on?", ipa: "/kæn aɪ traɪ ɪt ɒn/", vn: "Tôi có thể thử nó không?" },
                  { who: "B", s: "Of course. The fitting room is over there.", ipa: "/əv kɔːrs ðə ˈfɪtɪŋ ruːm ɪz ˈoʊvər ðɛr/", vn: "Tất nhiên. Phòng thử đồ ở đằng kia." },
                  { who: "A", s: "Perfect! I'll take it.", ipa: "/ˈpɜːrfɪkt aɪl teɪk ɪt/", vn: "Hoàn hảo! Tôi sẽ lấy nó." }
            ]
      },
      {
            id: 79,
            title: "Making a Phone Call",
            turns: [
                  { who: "A", s: "Is this a good time to talk?", ipa: "/ɪz ðɪs ə ɡʊd taɪm tə tɔːk/", vn: "Bây giờ có phải là thời điểm tốt để nói chuyện không?" },
                  { who: "B", s: "Yes, I have a few minutes.", ipa: "/jɛs aɪ hæv ə fjuː ˈmɪnɪts/", vn: "Vâng, tôi có vài phút." },
                  { who: "A", s: "Can we reschedule our meeting?", ipa: "/kæn wiː riːˈskɛdʒuːl ˈaʊər ˈmiːtɪŋ/", vn: "Chúng ta có thể thay đổi lịch họp không?" },
                  { who: "B", s: "Sure, how about tomorrow morning?", ipa: "/ʃʊr haʊ əˈbaʊt təˈmɒroʊ ˈmɔːrnɪŋ/", vn: "Chắc chắn, sáng mai thì sao?" },
                  { who: "A", s: "What time works best for you?", ipa: "/wɒt taɪm wɜːrks bɛst fər juː/", vn: "Thời gian nào phù hợp nhất với bạn?" },
                  { who: "B", s: "How about 9 AM? I have some free time then.", ipa: "/haʊ əˈbaʊt naɪn eɪˈɛm aɪ hæv sʌm friː taɪm ðɛn/", vn: "Sao 9h sáng? Lúc đó tôi rảnh." },
                  { who: "A", s: "Perfect, I'll send a calendar invite.", ipa: "/ˈpɜːrfɪkt aɪl sɛnd ə ˈkælɪndər ɪnˈvaɪt/", vn: "Tuyệt, tôi sẽ gửi lời mời lịch." },
                  { who: "B", s: "Do you need to discuss any documents?", ipa: "/duː juː niːd tə dɪsˈkʌs ˈɛni ˈdɒkjʊmənts/", vn: "Bạn có cần thảo luận tài liệu nào không?" },
                  { who: "A", s: "Yes, I'll email the report beforehand.", ipa: "/jɛs aɪl ˈiːmeɪl ðə rɪˈpɔːrt bɪˈfɔːrhænd/", vn: "Có, tôi sẽ gửi báo cáo trước qua email." },
                  { who: "B", s: "Great, I'll review it before the call.", ipa: "/ɡreɪt aɪl rɪˈvjuː ɪt bɪˈfɔːr ðə kɔːl/", vn: "Tuyệt, tôi sẽ xem trước khi gọi." }
            ]
      },
      {
            id: 80,
            title: "Making a Phone Call",
            turns: [
                  { who: "A", s: "Is this a good time to talk?", ipa: "/ɪz ðɪs ə ɡʊd taɪm tə tɔːk/", vn: "Bây giờ có phải là thời điểm tốt để nói chuyện không?" },
                  { who: "B", s: "Yes, I have a few minutes.", ipa: "/jɛs aɪ hæv ə fjuː ˈmɪnɪts/", vn: "Vâng, tôi có vài phút." },
                  { who: "A", s: "Can we reschedule our meeting?", ipa: "/kæn wiː riːˈskɛdʒuːl ˈaʊər ˈmiːtɪŋ/", vn: "Chúng ta có thể thay đổi lịch họp không?" },
                  { who: "B", s: "Sure, how about tomorrow morning?", ipa: "/ʃʊr haʊ əˈbaʊt təˈmɒroʊ ˈmɔːrnɪŋ/", vn: "Chắc chắn, sáng mai thì sao?" },
                  { who: "A", s: "What time works best for you?", ipa: "/wɒt taɪm wɜːrks bɛst fər juː/", vn: "Thời gian nào phù hợp nhất với bạn?" },
                  { who: "B", s: "How about 9 AM? I have some free time then.", ipa: "/haʊ əˈbaʊt naɪn eɪˈɛm aɪ hæv sʌm friː taɪm ðɛn/", vn: "Sao 9h sáng? Lúc đó tôi rảnh." },
                  { who: "A", s: "Perfect, I'll send a calendar invite.", ipa: "/ˈpɜːrfɪkt aɪl sɛnd ə ˈkælɪndər ɪnˈvaɪt/", vn: "Tuyệt, tôi sẽ gửi lời mời lịch." },
                  { who: "B", s: "Do you need to discuss any documents?", ipa: "/duː juː niːd tə dɪsˈkʌs ˈɛni ˈdɒkjʊmənts/", vn: "Bạn có cần thảo luận tài liệu nào không?" },
                  { who: "A", s: "Yes, I'll email the report beforehand.", ipa: "/jɛs aɪl ˈiːmeɪl ðə rɪˈpɔːrt bɪˈfɔːrhænd/", vn: "Có, tôi sẽ gửi báo cáo trước qua email." },
                  { who: "B", s: "Great, I'll review it before the call.", ipa: "/ɡreɪt aɪl rɪˈvjuː ɪt bɪˈfɔːr ðə kɔːl/", vn: "Tuyệt, tôi sẽ xem trước khi gọi." }
            ]
      },
      {
            id: 81,
            title: "Making a Phone Call",
            turns: [
                  { who: "A", s: "Is this a good time to talk?", ipa: "/ɪz ðɪs ə ɡʊd taɪm tə tɔːk/", vn: "Bây giờ có phải là thời điểm tốt để nói chuyện không?" },
                  { who: "B", s: "Yes, I have a few minutes.", ipa: "/jɛs aɪ hæv ə fjuː ˈmɪnɪts/", vn: "Vâng, tôi có vài phút." },
                  { who: "A", s: "Can we reschedule our meeting?", ipa: "/kæn wiː riːˈskɛdʒuːl ˈaʊər ˈmiːtɪŋ/", vn: "Chúng ta có thể thay đổi lịch họp không?" },
                  { who: "B", s: "Sure, how about tomorrow morning?", ipa: "/ʃʊr haʊ əˈbaʊt təˈmɒroʊ ˈmɔːrnɪŋ/", vn: "Chắc chắn, sáng mai thì sao?" },
                  { who: "A", s: "What time works best for you?", ipa: "/wɒt taɪm wɜːrks bɛst fər juː/", vn: "Thời gian nào phù hợp nhất với bạn?" },
                  { who: "B", s: "How about 9 AM? I have some free time then.", ipa: "/haʊ əˈbaʊt naɪn eɪˈɛm aɪ hæv sʌm friː taɪm ðɛn/", vn: "Sao 9h sáng? Lúc đó tôi rảnh." },
                  { who: "A", s: "Perfect, I'll send a calendar invite.", ipa: "/ˈpɜːrfɪkt aɪl sɛnd ə ˈkælɪndər ɪnˈvaɪt/", vn: "Tuyệt, tôi sẽ gửi lời mời lịch." },
                  { who: "B", s: "Do you need to discuss any documents?", ipa: "/duː juː niːd tə dɪsˈkʌs ˈɛni ˈdɒkjʊmənts/", vn: "Bạn có cần thảo luận tài liệu nào không?" },
                  { who: "A", s: "Yes, I'll email the report beforehand.", ipa: "/jɛs aɪl ˈiːmeɪl ðə rɪˈpɔːrt bɪˈfɔːrhænd/", vn: "Có, tôi sẽ gửi báo cáo trước qua email." },
                  { who: "B", s: "Great, I'll review it before the call.", ipa: "/ɡreɪt aɪl rɪˈvjuː ɪt bɪˈfɔːr ðə kɔːl/", vn: "Tuyệt, tôi sẽ xem trước khi gọi." }
            ]
      },
      {
            id: 82,
            title: "At the Coffee Shop",
            turns: [
                  { who: "A", s: "Can I have that with oat milk?", ipa: "/kæn aɪ hæv ðæt wɪð oʊt mɪlk/", vn: "Tôi có thể dùng sữa yến mạch không?" },
                  { who: "B", s: "Yes, would you like it heated?", ipa: "/jɛs wʊd juː laɪk ɪt hiːtɪd/", vn: "Có, bạn có muốn làm nóng không?" },
                  { who: "A", s: "Please make it extra hot.", ipa: "/pliz meɪk ɪt ˈɛkstrə hɒt/", vn: "Làm ơn làm nóng hơn." },
                  { who: "B", s: "Sure, that'll be ready shortly.", ipa: "/ʃʊr ðætəl bi ˈrɛdi ˈʃɔːrtli/", vn: "Chắc chắn, nó sẽ sẵn sàng ngay." },
                  { who: "A", s: "Do you have almond milk?", ipa: "/duː juː hæv ˈɑːlmənd mɪlk/", vn: "Bạn có sữa hạnh nhân không?" },
                  { who: "B", s: "Yes, almond and soy are available.", ipa: "/jɛs ˈɑːlmənd ænd sɔɪ ɑːr əˈveɪləbl/", vn: "Có, sữa hạnh nhân và đậu nành đều có." },
                  { who: "A", s: "Can I have a double shot?", ipa: "/kæn aɪ hæv ə ˈdʌbəl ʃɒt/", vn: "Tôi có thể lấy hai shot espresso không?" },
                  { who: "B", s: "Sure, extra espresso coming up.", ipa: "/ʃʊr ˈɛkstrə ɛsˈprɛsoʊ ˈkʌmɪŋ ʌp/", vn: "Được, thêm espresso đây." },
                  { who: "A", s: "Do you offer loyalty stamps?", ipa: "/duː juː ˈɔːfər ˈlɔɪəlti stæmps/", vn: "Bạn có tem tích điểm không?" },
                  { who: "B", s: "Yes, the 10th coffee is free after stamps.", ipa: "/jɛs ðə ˈtɛnθ ˈkɒfi ɪz friː ˈæftər stæmps/", vn: "Có, cốc thứ 10 sẽ miễn phí sau khi đủ tem." }
            ]
      },
      {
            id: 83,
            title: "At the Coffee Shop",
            turns: [
                  { who: "A", s: "Can I have that with oat milk?", ipa: "/kæn aɪ hæv ðæt wɪð oʊt mɪlk/", vn: "Tôi có thể dùng sữa yến mạch không?" },
                  { who: "B", s: "Yes, would you like it heated?", ipa: "/jɛs wʊd juː laɪk ɪt hiːtɪd/", vn: "Có, bạn có muốn làm nóng không?" },
                  { who: "A", s: "Please make it extra hot.", ipa: "/pliz meɪk ɪt ˈɛkstrə hɒt/", vn: "Làm ơn làm nóng hơn." },
                  { who: "B", s: "Sure, that'll be ready shortly.", ipa: "/ʃʊr ðætəl bi ˈrɛdi ˈʃɔːrtli/", vn: "Chắc chắn, nó sẽ sẵn sàng ngay." },
                  { who: "A", s: "Do you have almond milk?", ipa: "/duː juː hæv ˈɑːlmənd mɪlk/", vn: "Bạn có sữa hạnh nhân không?" },
                  { who: "B", s: "Yes, almond and soy are available.", ipa: "/jɛs ˈɑːlmənd ænd sɔɪ ɑːr əˈveɪləbl/", vn: "Có, sữa hạnh nhân và đậu nành đều có." },
                  { who: "A", s: "Can I have a double shot?", ipa: "/kæn aɪ hæv ə ˈdʌbəl ʃɒt/", vn: "Tôi có thể lấy hai shot espresso không?" },
                  { who: "B", s: "Sure, extra espresso coming up.", ipa: "/ʃʊr ˈɛkstrə ɛsˈprɛsoʊ ˈkʌmɪŋ ʌp/", vn: "Được, thêm espresso đây." },
                  { who: "A", s: "Do you offer loyalty stamps?", ipa: "/duː juː ˈɔːfər ˈlɔɪəlti stæmps/", vn: "Bạn có tem tích điểm không?" },
                  { who: "B", s: "Yes, the 10th coffee is free after stamps.", ipa: "/jɛs ðə ˈtɛnθ ˈkɒfi ɪz friː ˈæftər stæmps/", vn: "Có, cốc thứ 10 sẽ miễn phí sau khi đủ tem." }
            ]
      },
      {
            id: 84,
            title: "At the Coffee Shop",
            turns: [
                  { who: "A", s: "Can I have that with oat milk?", ipa: "/kæn aɪ hæv ðæt wɪð oʊt mɪlk/", vn: "Tôi có thể dùng sữa yến mạch không?" },
                  { who: "B", s: "Yes, would you like it heated?", ipa: "/jɛs wʊd juː laɪk ɪt hiːtɪd/", vn: "Có, bạn có muốn làm nóng không?" },
                  { who: "A", s: "Please make it extra hot.", ipa: "/pliz meɪk ɪt ˈɛkstrə hɒt/", vn: "Làm ơn làm nóng hơn." },
                  { who: "B", s: "Sure, that'll be ready shortly.", ipa: "/ʃʊr ðætəl bi ˈrɛdi ˈʃɔːrtli/", vn: "Chắc chắn, nó sẽ sẵn sàng ngay." },
                  { who: "A", s: "Do you have almond milk?", ipa: "/duː juː hæv ˈɑːlmənd mɪlk/", vn: "Bạn có sữa hạnh nhân không?" },
                  { who: "B", s: "Yes, almond and soy are available.", ipa: "/jɛs ˈɑːlmənd ænd sɔɪ ɑːr əˈveɪləbl/", vn: "Có, sữa hạnh nhân và đậu nành đều có." },
                  { who: "A", s: "Can I have a double shot?", ipa: "/kæn aɪ hæv ə ˈdʌbəl ʃɒt/", vn: "Tôi có thể lấy hai shot espresso không?" },
                  { who: "B", s: "Sure, extra espresso coming up.", ipa: "/ʃʊr ˈɛkstrə ɛsˈprɛsoʊ ˈkʌmɪŋ ʌp/", vn: "Được, thêm espresso đây." },
                  { who: "A", s: "Do you offer loyalty stamps?", ipa: "/duː juː ˈɔːfər ˈlɔɪəlti stæmps/", vn: "Bạn có tem tích điểm không?" },
                  { who: "B", s: "Yes, the 10th coffee is free after stamps.", ipa: "/jɛs ðə ˈtɛnθ ˈkɒfi ɪz friː ˈæftər stæmps/", vn: "Có, cốc thứ 10 sẽ miễn phí sau khi đủ tem." }
            ]
      },
      {
            id: 85,
            title: "At the Pharmacy",
            turns: [
                  { who: "A", s: "Do you have a loyalty card?", ipa: "/duː juː hæv ə ˈlɔɪəlti kɑːrd/", vn: "Bạn có thẻ khách hàng thân thiết không?" },
                  { who: "B", s: "Yes, sign up at the counter.", ipa: "/jɛs saɪn ʌp æt ðə ˈkaʊntər/", vn: "Có, đăng ký tại quầy." },
                  { who: "A", s: "Will it give me discounts?", ipa: "/wɪl ɪt ɡɪv miː dɪsˈkaʊnts/", vn: "Nó có giảm giá cho tôi không?" },
                  { who: "B", s: "Yes, you get points toward discounts.", ipa: "/jɛs juː ɡɛt pɔɪnts təˈwɔːrd dɪsˈkaʊnts/", vn: "Có, bạn sẽ nhận điểm để đổi giảm giá." },
                  { who: "A", s: "Can I buy over-the-counter allergy medicine?", ipa: "/kæn aɪ baɪ ˌoʊvər ðə ˈkaʊntər ˈælɚdʒi ˈmɛdɪsɪn/", vn: "Tôi có thể mua thuốc dị ứng không cần đơn không?" },
                  { who: "B", s: "Yes, we have antihistamines and nasal sprays.", ipa: "/jɛs wi hæv ˌæntiˈhɪstəmiːnz ænd ˈneɪzəl spreɪz/", vn: "Có, chúng tôi có thuốc kháng histamine và xịt mũi." },
                  { who: "A", s: "Do you offer flu vaccinations?", ipa: "/duː juː ˈɔːfər fluː ˌvæksɪˈneɪʃənz/", vn: "Bạn có tiêm vắc xin cúm không?" },
                  { who: "B", s: "Yes, walk-ins are welcome or book online.", ipa: "/jɛs wɔːk ɪnz ɑːr ˈwɛlkəm ɔːr bʊk ˈɒnlaɪn/", vn: "Có, bạn có thể đến trực tiếp hoặc đặt lịch trực tuyến." },
                  { who: "A", s: "Can you recommend something for a sore throat?", ipa: "/kæn juː ˌrɛkəˈmɛnd ˈsʌmθɪŋ fər ə sɔːr θroʊt/", vn: "Bạn có thể giới thiệu gì cho đau họng không?" },
                  { who: "B", s: "Throat lozenges and warm salt gargles help.", ipa: "/θroʊt ˈlɒdʒənz ænd wɔːrm sɔːlt ˈɡɑːrɡəlz hɛlp/", vn: "Kẹo ngậm họng và súc miệng nước muối ấm sẽ giúp." }
            ]
      },
      {
            id: 86,
            title: "At the Pharmacy",
            turns: [
                  { who: "A", s: "Do you have a loyalty card?", ipa: "/duː juː hæv ə ˈlɔɪəlti kɑːrd/", vn: "Bạn có thẻ khách hàng thân thiết không?" },
                  { who: "B", s: "Yes, sign up at the counter.", ipa: "/jɛs saɪn ʌp æt ðə ˈkaʊntər/", vn: "Có, đăng ký tại quầy." },
                  { who: "A", s: "Will it give me discounts?", ipa: "/wɪl ɪt ɡɪv miː dɪsˈkaʊnts/", vn: "Nó có giảm giá cho tôi không?" },
                  { who: "B", s: "Yes, you get points toward discounts.", ipa: "/jɛs juː ɡɛt pɔɪnts təˈwɔːrd dɪsˈkaʊnts/", vn: "Có, bạn sẽ nhận điểm để đổi giảm giá." },
                  { who: "A", s: "Can I buy over-the-counter allergy medicine?", ipa: "/kæn aɪ baɪ ˌoʊvər ðə ˈkaʊntər ˈælɚdʒi ˈmɛdɪsɪn/", vn: "Tôi có thể mua thuốc dị ứng không cần đơn không?" },
                  { who: "B", s: "Yes, we have antihistamines and nasal sprays.", ipa: "/jɛs wi hæv ˌæntiˈhɪstəmiːnz ænd ˈneɪzəl spreɪz/", vn: "Có, chúng tôi có thuốc kháng histamine và xịt mũi." },
                  { who: "A", s: "Do you offer flu vaccinations?", ipa: "/duː juː ˈɔːfər fluː ˌvæksɪˈneɪʃənz/", vn: "Bạn có tiêm vắc xin cúm không?" },
                  { who: "B", s: "Yes, walk-ins are welcome or book online.", ipa: "/jɛs wɔːk ɪnz ɑːr ˈwɛlkəm ɔːr bʊk ˈɒnlaɪn/", vn: "Có, bạn có thể đến trực tiếp hoặc đặt lịch trực tuyến." },
                  { who: "A", s: "Can you recommend something for a sore throat?", ipa: "/kæn juː ˌrɛkəˈmɛnd ˈsʌmθɪŋ fər ə sɔːr θroʊt/", vn: "Bạn có thể giới thiệu gì cho đau họng không?" },
                  { who: "B", s: "Throat lozenges and warm salt gargles help.", ipa: "/θroʊt ˈlɒdʒənz ænd wɔːrm sɔːlt ˈɡɑːrɡəlz hɛlp/", vn: "Kẹo ngậm họng và súc miệng nước muối ấm sẽ giúp." }
            ]
      },
      {
            id: 87,
            title: "At the Pharmacy",
            turns: [
                  { who: "A", s: "Do you have a loyalty card?", ipa: "/duː juː hæv ə ˈlɔɪəlti kɑːrd/", vn: "Bạn có thẻ khách hàng thân thiết không?" },
                  { who: "B", s: "Yes, sign up at the counter.", ipa: "/jɛs saɪn ʌp æt ðə ˈkaʊntər/", vn: "Có, đăng ký tại quầy." },
                  { who: "A", s: "Will it give me discounts?", ipa: "/wɪl ɪt ɡɪv miː dɪsˈkaʊnts/", vn: "Nó có giảm giá cho tôi không?" },
                  { who: "B", s: "Yes, you get points toward discounts.", ipa: "/jɛs juː ɡɛt pɔɪnts təˈwɔːrd dɪsˈkaʊnts/", vn: "Có, bạn sẽ nhận điểm để đổi giảm giá." },
                  { who: "A", s: "Can I buy over-the-counter allergy medicine?", ipa: "/kæn aɪ baɪ ˌoʊvər ðə ˈkaʊntər ˈælɚdʒi ˈmɛdɪsɪn/", vn: "Tôi có thể mua thuốc dị ứng không cần đơn không?" },
                  { who: "B", s: "Yes, we have antihistamines and nasal sprays.", ipa: "/jɛs wi hæv ˌæntiˈhɪstəmiːnz ænd ˈneɪzəl spreɪz/", vn: "Có, chúng tôi có thuốc kháng histamine và xịt mũi." },
                  { who: "A", s: "Do you offer flu vaccinations?", ipa: "/duː juː ˈɔːfər fluː ˌvæksɪˈneɪʃənz/", vn: "Bạn có tiêm vắc xin cúm không?" },
                  { who: "B", s: "Yes, walk-ins are welcome or book online.", ipa: "/jɛs wɔːk ɪnz ɑːr ˈwɛlkəm ɔːr bʊk ˈɒnlaɪn/", vn: "Có, bạn có thể đến trực tiếp hoặc đặt lịch trực tuyến." },
                  { who: "A", s: "Can you recommend something for a sore throat?", ipa: "/kæn juː ˌrɛkəˈmɛnd ˈsʌmθɪŋ fər ə sɔːr θroʊt/", vn: "Bạn có thể giới thiệu gì cho đau họng không?" },
                  { who: "B", s: "Throat lozenges and warm salt gargles help.", ipa: "/θroʊt ˈlɒdʒənz ænd wɔːrm sɔːlt ˈɡɑːrɡəlz hɛlp/", vn: "Kẹo ngậm họng và súc miệng nước muối ấm sẽ giúp." }
            ]
      },
      {
            id: 88,
            title: "Movie Theater",
            turns: [
                  { who: "A", s: "Are there any discounts for students?", ipa: "/ɑːr ðɛr ˈɛni dɪsˈkaʊnts fər ˈstjuːdənts/", vn: "Có giảm giá cho sinh viên không?" },
                  { who: "B", s: "Yes, show your student ID at the box office.", ipa: "/jɛs ʃoʊ jʊr ˈstjuːdənt aɪˈdiː æt ðə bɒks ˈɒfɪs/", vn: "Có, xuất trình thẻ sinh viên tại quầy vé." },
                  { who: "A", s: "What time is the next showing?", ipa: "/wʌt taɪm ɪz ðə nɛkst ˈʃoʊɪŋ/", vn: "Màn chiếu tiếp theo là mấy giờ?" },
                  { who: "B", s: "In about 30 minutes in Theater 1.", ipa: "/ɪn əˈbaʊt ˈθɜːrti ˈmɪnɪts ɪn ˈθiːətər wʌn/", vn: "Trong khoảng 30 phút ở Rạp 1." },
                  { who: "A", s: "Are there assigned seats?", ipa: "/ɑːr ðɛr əˈsaɪnd siːts/", vn: "Có chỗ ngồi được chỉ định không?" },
                  { who: "B", s: "For premium screenings yes; regular shows are open seating.", ipa: "/fɔːr ˈpriːmiəm ˈskriːnɪŋz jɛs ˈrɛɡjələr ʃoʊz ɑːr ˈoʊpən ˈsiːtɪŋ/", vn: "Với suất đặc biệt thì có; suất thường là tự chọn chỗ." },
                  { who: "A", s: "Can I buy snacks inside?", ipa: "/kæn aɪ baɪ snæks ɪnˈsaɪd/", vn: "Tôi có thể mua đồ ăn vặt bên trong không?" },
                  { who: "B", s: "Yes, popcorn and drinks are available at the concession stand.", ipa: "/jɛs ˈpɒpkɔːrn ænd drɪŋks ɑːr əˈveɪləbl æt ðə kənˈsɛʃən stænd/", vn: "Có, bỏng ngô và đồ uống có ở quầy bán hàng." },
                  { who: "A", s: "Is there a late-night showing?", ipa: "/ɪz ðɛr ə leɪt naɪt ˈʃoʊɪŋ/", vn: "Có suất chiếu khuya không?" },
                  { who: "B", s: "Yes, we have midnight shows on Fridays and Saturdays.", ipa: "/jɛs wi hæv ˈmɪdnaɪt ʃoʊz ɒn ˈfraɪdeɪz ænd ˈsætərdeɪz/", vn: "Có, có suất nửa đêm vào Thứ sáu và Thứ bảy." }
            ]
      },
      {
            id: 89,
            title: "Movie Theater",
            turns: [
                  { who: "A", s: "Are there any discounts for students?", ipa: "/ɑːr ðɛr ˈɛni dɪsˈkaʊnts fər ˈstjuːdənts/", vn: "Có giảm giá cho sinh viên không?" },
                  { who: "B", s: "Yes, show your student ID at the box office.", ipa: "/jɛs ʃoʊ jʊr ˈstjuːdənt aɪˈdiː æt ðə bɒks ˈɒfɪs/", vn: "Có, xuất trình thẻ sinh viên tại quầy vé." },
                  { who: "A", s: "What time is the next showing?", ipa: "/wʌt taɪm ɪz ðə nɛkst ˈʃoʊɪŋ/", vn: "Màn chiếu tiếp theo là mấy giờ?" },
                  { who: "B", s: "In about 30 minutes in Theater 1.", ipa: "/ɪn əˈbaʊt ˈθɜːrti ˈmɪnɪts ɪn ˈθiːətər wʌn/", vn: "Trong khoảng 30 phút ở Rạp 1." },
                  { who: "A", s: "Are there assigned seats?", ipa: "/ɑːr ðɛr əˈsaɪnd siːts/", vn: "Có chỗ ngồi được chỉ định không?" },
                  { who: "B", s: "For premium screenings yes; regular shows are open seating.", ipa: "/fɔːr ˈpriːmiəm ˈskriːnɪŋz jɛs ˈrɛɡjələr ʃoʊz ɑːr ˈoʊpən ˈsiːtɪŋ/", vn: "Với suất đặc biệt thì có; suất thường là tự chọn chỗ." },
                  { who: "A", s: "Can I buy snacks inside?", ipa: "/kæn aɪ baɪ snæks ɪnˈsaɪd/", vn: "Tôi có thể mua đồ ăn vặt bên trong không?" },
                  { who: "B", s: "Yes, popcorn and drinks are available at the concession stand.", ipa: "/jɛs ˈpɒpkɔːrn ænd drɪŋks ɑːr əˈveɪləbl æt ðə kənˈsɛʃən stænd/", vn: "Có, bỏng ngô và đồ uống có ở quầy bán hàng." },
                  { who: "A", s: "Is there a late-night showing?", ipa: "/ɪz ðɛr ə leɪt naɪt ˈʃoʊɪŋ/", vn: "Có suất chiếu khuya không?" },
                  { who: "B", s: "Yes, we have midnight shows on Fridays and Saturdays.", ipa: "/jɛs wi hæv ˈmɪdnaɪt ʃoʊz ɒn ˈfraɪdeɪz ænd ˈsætərdeɪz/", vn: "Có, có suất nửa đêm vào Thứ sáu và Thứ bảy." }
            ]
      },
      {
            id: 90,
            title: "Movie Theater",
            turns: [
                  { who: "A", s: "Are there any discounts for students?", ipa: "/ɑːr ðɛr ˈɛni dɪsˈkaʊnts fər ˈstjuːdənts/", vn: "Có giảm giá cho sinh viên không?" },
                  { who: "B", s: "Yes, show your student ID at the box office.", ipa: "/jɛs ʃoʊ jʊr ˈstjuːdənt aɪˈdiː æt ðə bɒks ˈɒfɪs/", vn: "Có, xuất trình thẻ sinh viên tại quầy vé." },
                  { who: "A", s: "What time is the next showing?", ipa: "/wʌt taɪm ɪz ðə nɛkst ˈʃoʊɪŋ/", vn: "Màn chiếu tiếp theo là mấy giờ?" },
                  { who: "B", s: "In about 30 minutes in Theater 1.", ipa: "/ɪn əˈbaʊt ˈθɜːrti ˈmɪnɪts ɪn ˈθiːətər wʌn/", vn: "Trong khoảng 30 phút ở Rạp 1." },
                  { who: "A", s: "Are there assigned seats?", ipa: "/ɑːr ðɛr əˈsaɪnd siːts/", vn: "Có chỗ ngồi được chỉ định không?" },
                  { who: "B", s: "For premium screenings yes; regular shows are open seating.", ipa: "/fɔːr ˈpriːmiəm ˈskriːnɪŋz jɛs ˈrɛɡjələr ʃoʊz ɑːr ˈoʊpən ˈsiːtɪŋ/", vn: "Với suất đặc biệt thì có; suất thường là tự chọn chỗ." },
                  { who: "A", s: "Can I buy snacks inside?", ipa: "/kæn aɪ baɪ snæks ɪnˈsaɪd/", vn: "Tôi có thể mua đồ ăn vặt bên trong không?" },
                  { who: "B", s: "Yes, popcorn and drinks are available at the concession stand.", ipa: "/jɛs ˈpɒpkɔːrn ænd drɪŋks ɑːr əˈveɪləbl æt ðə kənˈsɛʃən stænd/", vn: "Có, bỏng ngô và đồ uống có ở quầy bán hàng." },
                  { who: "A", s: "Is there a late-night showing?", ipa: "/ɪz ðɛr ə leɪt naɪt ˈʃoʊɪŋ/", vn: "Có suất chiếu khuya không?" },
                  { who: "B", s: "Yes, we have midnight shows on Fridays and Saturdays.", ipa: "/jɛs wi hæv ˈmɪdnaɪt ʃoʊz ɒn ˈfraɪdeɪz ænd ˈsætərdeɪz/", vn: "Có, có suất nửa đêm vào Thứ sáu và Thứ bảy." }
            ]
      },
      {
            id: 91,
            title: "Hair Salon",
            turns: [
                  { who: "A", s: "Can you style my hair for an event?", ipa: "/kæn juː staɪl maɪ hɛr fər ən ɪˈvɛnt/", vn: "Bạn có thể tạo kiểu tóc cho tôi đi sự kiện không?" },
                  { who: "B", s: "Yes, we offer styling services by appointment.", ipa: "/jɛs wi ˈɔːfər ˈstaɪlɪŋ ˈsɜːrvɪsɪz baɪ əˈpɔɪntmənt/", vn: "Có, chúng tôi có dịch vụ tạo kiểu theo lịch." },
                  { who: "A", s: "How long will it take?", ipa: "/haʊ lɔːŋ wɪl ɪt teɪk/", vn: "Sẽ mất bao lâu?" },
                  { who: "B", s: "About an hour depending on the style.", ipa: "/əˈbaʊt ən aʊər dɪˈpɛndɪŋ ɒn ðə staɪl/", vn: "Khoảng một giờ tùy kiểu." },
                  { who: "A", s: "Do you use organic products?", ipa: "/duː juː juz ɔːrˈɡænɪk ˈprɒdʌkts/", vn: "Bạn có dùng sản phẩm hữu cơ không?" },
                  { who: "B", s: "Yes, we have an organic product line available.", ipa: "/jɛs wi hæv ən ɔːrˈɡænɪk ˈprɒdʌkt laɪn əˈveɪləbl/", vn: "Có, chúng tôi có dòng sản phẩm hữu cơ." },
                  { who: "A", s: "Can you recommend a hairstyle for my face shape?", ipa: "/kæn juː ˌrɛkəˈmɛnd ə ˈhɛərstaɪl fər maɪ feɪs ʃeɪp/", vn: "Bạn có thể gợi ý kiểu tóc phù hợp với khuôn mặt tôi không?" },
                  { who: "B", s: "Yes, let's discuss options after we check your hair texture.", ipa: "/jɛs lɛts dɪˈskʌs ˈɒpʃənz ˈæftər wi tʃɛk jʊr hɛər ˈtɛkstʃər/", vn: "Có, hãy thảo luận sau khi kiểm tra độ tóc của bạn." },
                  { who: "A", s: "Do you accept walk-ins or is appointment required?", ipa: "/duː juː əkˈsɛpt wɔːk ɪnz ɔːr ɪz əˈpɔɪntmənt rɪˈkwaɪərd/", vn: "Bạn có nhận khách không hẹn trước không hay phải đặt lịch?" },
                  { who: "B", s: "We accept both; appointments preferred on weekends.", ipa: "/wi əkˈsɛpt boʊθ əˈpɔɪntmənts prɪˈfɜːrd ɒn ˈwiːkɛndz/", vn: "Chúng tôi nhận cả hai; ưu tiên đặt trước vào cuối tuần." }
            ]
      },
      {
            id: 92,
            title: "Hair Salon",
            turns: [
                  { who: "A", s: "Can you style my hair for an event?", ipa: "/kæn juː staɪl maɪ hɛr fər ən ɪˈvɛnt/", vn: "Bạn có thể tạo kiểu tóc cho tôi đi sự kiện không?" },
                  { who: "B", s: "Yes, we offer styling services by appointment.", ipa: "/jɛs wi ˈɔːfər ˈstaɪlɪŋ ˈsɜːrvɪsɪz baɪ əˈpɔɪntmənt/", vn: "Có, chúng tôi có dịch vụ tạo kiểu theo lịch." },
                  { who: "A", s: "How long will it take?", ipa: "/haʊ lɔːŋ wɪl ɪt teɪk/", vn: "Sẽ mất bao lâu?" },
                  { who: "B", s: "About an hour depending on the style.", ipa: "/əˈbaʊt ən aʊər dɪˈpɛndɪŋ ɒn ðə staɪl/", vn: "Khoảng một giờ tùy kiểu." },
                  { who: "A", s: "Do you use organic products?", ipa: "/duː juː juz ɔːrˈɡænɪk ˈprɒdʌkts/", vn: "Bạn có dùng sản phẩm hữu cơ không?" },
                  { who: "B", s: "Yes, we have an organic product line available.", ipa: "/jɛs wi hæv ən ɔːrˈɡænɪk ˈprɒdʌkt laɪn əˈveɪləbl/", vn: "Có, chúng tôi có dòng sản phẩm hữu cơ." },
                  { who: "A", s: "Can you recommend a hairstyle for my face shape?", ipa: "/kæn juː ˌrɛkəˈmɛnd ə ˈhɛərstaɪl fər maɪ feɪs ʃeɪp/", vn: "Bạn có thể gợi ý kiểu tóc phù hợp với khuôn mặt tôi không?" },
                  { who: "B", s: "Yes, let's discuss options after we check your hair texture.", ipa: "/jɛs lɛts dɪˈskʌs ˈɒpʃənz ˈæftər wi tʃɛk jʊr hɛər ˈtɛkstʃər/", vn: "Có, hãy thảo luận sau khi kiểm tra độ tóc của bạn." },
                  { who: "A", s: "Do you accept walk-ins or is appointment required?", ipa: "/duː juː əkˈsɛpt wɔːk ɪnz ɔːr ɪz əˈpɔɪntmənt rɪˈkwaɪərd/", vn: "Bạn có nhận khách không hẹn trước không hay phải đặt lịch?" },
                  { who: "B", s: "We accept both; appointments preferred on weekends.", ipa: "/wi əkˈsɛpt boʊθ əˈpɔɪntmənts prɪˈfɜːrd ɒn ˈwiːkɛndz/", vn: "Chúng tôi nhận cả hai; ưu tiên đặt trước vào cuối tuần." }
            ]
      },
      {
            id: 93,
            title: "Hair Salon",
            turns: [
                  { who: "A", s: "Can you style my hair for an event?", ipa: "/kæn juː staɪl maɪ hɛr fər ən ɪˈvɛnt/", vn: "Bạn có thể tạo kiểu tóc cho tôi đi sự kiện không?" },
                  { who: "B", s: "Yes, we offer styling services by appointment.", ipa: "/jɛs wi ˈɔːfər ˈstaɪlɪŋ ˈsɜːrvɪsɪz baɪ əˈpɔɪntmənt/", vn: "Có, chúng tôi có dịch vụ tạo kiểu theo lịch." },
                  { who: "A", s: "How long will it take?", ipa: "/haʊ lɔːŋ wɪl ɪt teɪk/", vn: "Sẽ mất bao lâu?" },
                  { who: "B", s: "About an hour depending on the style.", ipa: "/əˈbaʊt ən aʊər dɪˈpɛndɪŋ ɒn ðə staɪl/", vn: "Khoảng một giờ tùy kiểu." },
                  { who: "A", s: "Do you use organic products?", ipa: "/duː juː juz ɔːrˈɡænɪk ˈprɒdʌkts/", vn: "Bạn có dùng sản phẩm hữu cơ không?" },
                  { who: "B", s: "Yes, we have an organic product line available.", ipa: "/jɛs wi hæv ən ɔːrˈɡænɪk ˈprɒdʌkt laɪn əˈveɪləbl/", vn: "Có, chúng tôi có dòng sản phẩm hữu cơ." },
                  { who: "A", s: "Can you recommend a hairstyle for my face shape?", ipa: "/kæn juː ˌrɛkəˈmɛnd ə ˈhɛərstaɪl fər maɪ feɪs ʃeɪp/", vn: "Bạn có thể gợi ý kiểu tóc phù hợp với khuôn mặt tôi không?" },
                  { who: "B", s: "Yes, let's discuss options after we check your hair texture.", ipa: "/jɛs lɛts dɪˈskʌs ˈɒpʃənz ˈæftər wi tʃɛk jʊr hɛər ˈtɛkstʃər/", vn: "Có, hãy thảo luận sau khi kiểm tra độ tóc của bạn." },
                  { who: "A", s: "Do you accept walk-ins or is appointment required?", ipa: "/duː juː əkˈsɛpt wɔːk ɪnz ɔːr ɪz əˈpɔɪntmənt rɪˈkwaɪərd/", vn: "Bạn có nhận khách không hẹn trước không hay phải đặt lịch?" },
                  { who: "B", s: "We accept both; appointments preferred on weekends.", ipa: "/wi əkˈsɛpt boʊθ əˈpɔɪntmənts prɪˈfɜːrd ɒn ˈwiːkɛndz/", vn: "Chúng tôi nhận cả hai; ưu tiên đặt trước vào cuối tuần." }
            ]
      },
      {
            id: 94,
            title: "Job Interview",
            turns: [
                  { who: "A", s: "Hello, I'm here for the job interview.", ipa: "/həˈloʊ aɪm hɪr fər ðə dʒɑːb ˈɪntərvjuː/", vn: "Xin chào, tôi đến đây để phỏng vấn việc làm." },
                  { who: "B", s: "Welcome! Please have a seat. I'm the manager.", ipa: "/ˈwɛlkəm pliz hæv ə sit aɪm ðə ˈmænɪdʒər/", vn: "Chào mừng! Làm ơn ngồi xuống. Tôi là quản lý." },
                  { who: "A", s: "Thank you. I'm excited about this opportunity.", ipa: "/ˈθæŋk juː aɪm ɪkˈsaɪtɪd əˈbaʊt ðɪs ˌɑːpərˈtunəti/", vn: "Cảm ơn. Tôi rất hào hứng với cơ hội này." },
                  { who: "B", s: "Tell me about your previous experience.", ipa: "/tɛl miː əˈbaʊt jʊr ˈpriːviəs ɪkˈspɪriəns/", vn: "Kể cho tôi nghe về kinh nghiệm trước đây của bạn." },
                  { who: "A", s: "I worked as a sales assistant for two years.", ipa: "/aɪ wɜːrkt æz ə seɪlz əˈsɪstənt fər tuː jɪrz/", vn: "Tôi làm trợ lý bán hàng trong hai năm." },
                  { who: "B", s: "What are your strengths?", ipa: "/wʌt ɑːr jʊr strɛŋθs/", vn: "Điểm mạnh của bạn là gì?" },
                  { who: "A", s: "I'm good at communication and problem-solving.", ipa: "/aɪm ɡʊd æt kəˌmjunɪˈkeɪʃən ænd ˈprɑːbləm ˈsɑːlvɪŋ/", vn: "Tôi giỏi giao tiếp và giải quyết vấn đề." },
                  { who: "B", s: "Why do you want to work here?", ipa: "/waɪ duː juː wɑːnt tə wɜːrk hɪr/", vn: "Tại sao bạn muốn làm việc ở đây?" },
                  { who: "A", s: "I admire your company's values and growth.", ipa: "/aɪ ædˈmaɪər jʊr ˈkʌmpəniz ˈvæljuːz ænd ɡroʊθ/", vn: "Tôi ngưỡng mộ giá trị và sự phát triển của công ty bạn." },
                  { who: "B", s: "We'll be in touch within a week.", ipa: "/wil bi ɪn tʌtʃ wɪðˈɪn ə wik/", vn: "Chúng tôi sẽ liên lạc trong vòng một tuần." }
            ]
      },
      {
            id: 95,
            title: "Job Interview",
            turns: [
                  { who: "A", s: "Hello, I'm here for the job interview.", ipa: "/həˈloʊ aɪm hɪr fər ðə dʒɑːb ˈɪntərvjuː/", vn: "Xin chào, tôi đến đây để phỏng vấn việc làm." },
                  { who: "B", s: "Welcome! Please have a seat. I'm the manager.", ipa: "/ˈwɛlkəm pliz hæv ə sit aɪm ðə ˈmænɪdʒər/", vn: "Chào mừng! Làm ơn ngồi xuống. Tôi là quản lý." },
                  { who: "A", s: "Thank you. I'm excited about this opportunity.", ipa: "/ˈθæŋk juː aɪm ɪkˈsaɪtɪd əˈbaʊt ðɪs ˌɑːpərˈtunəti/", vn: "Cảm ơn. Tôi rất hào hứng với cơ hội này." },
                  { who: "B", s: "Tell me about your previous experience.", ipa: "/tɛl miː əˈbaʊt jʊr ˈpriːviəs ɪkˈspɪriəns/", vn: "Kể cho tôi nghe về kinh nghiệm trước đây của bạn." },
                  { who: "A", s: "I worked as a sales assistant for two years.", ipa: "/aɪ wɜːrkt æz ə seɪlz əˈsɪstənt fər tuː jɪrz/", vn: "Tôi làm trợ lý bán hàng trong hai năm." },
                  { who: "B", s: "What are your strengths?", ipa: "/wʌt ɑːr jʊr strɛŋθs/", vn: "Điểm mạnh của bạn là gì?" },
                  { who: "A", s: "I'm good at communication and problem-solving.", ipa: "/aɪm ɡʊd æt kəˌmjunɪˈkeɪʃən ænd ˈprɑːbləm ˈsɑːlvɪŋ/", vn: "Tôi giỏi giao tiếp và giải quyết vấn đề." },
                  { who: "B", s: "Why do you want to work here?", ipa: "/waɪ duː juː wɑːnt tə wɜːrk hɪr/", vn: "Tại sao bạn muốn làm việc ở đây?" },
                  { who: "A", s: "I admire your company's values and growth.", ipa: "/aɪ ædˈmaɪər jʊr ˈkʌmpəniz ˈvæljuːz ænd ɡroʊθ/", vn: "Tôi ngưỡng mộ giá trị và sự phát triển của công ty bạn." },
                  { who: "B", s: "We'll be in touch within a week.", ipa: "/wil bi ɪn tʌtʃ wɪðˈɪn ə wik/", vn: "Chúng tôi sẽ liên lạc trong vòng một tuần." }
            ]
      },
      {
            id: 96,
            title: "Job Interview",
            turns: [
                  { who: "A", s: "Hello, I'm here for the job interview.", ipa: "/həˈloʊ aɪm hɪr fər ðə dʒɑːb ˈɪntərvjuː/", vn: "Xin chào, tôi đến đây để phỏng vấn việc làm." },
                  { who: "B", s: "Welcome! Please have a seat. I'm the manager.", ipa: "/ˈwɛlkəm pliz hæv ə sit aɪm ðə ˈmænɪdʒər/", vn: "Chào mừng! Làm ơn ngồi xuống. Tôi là quản lý." },
                  { who: "A", s: "Thank you. I'm excited about this opportunity.", ipa: "/ˈθæŋk juː aɪm ɪkˈsaɪtɪd əˈbaʊt ðɪs ˌɑːpərˈtunəti/", vn: "Cảm ơn. Tôi rất hào hứng với cơ hội này." },
                  { who: "B", s: "Tell me about your previous experience.", ipa: "/tɛl miː əˈbaʊt jʊr ˈpriːviəs ɪkˈspɪriəns/", vn: "Kể cho tôi nghe về kinh nghiệm trước đây của bạn." },
                  { who: "A", s: "I worked as a sales assistant for two years.", ipa: "/aɪ wɜːrkt æz ə seɪlz əˈsɪstənt fər tuː jɪrz/", vn: "Tôi làm trợ lý bán hàng trong hai năm." },
                  { who: "B", s: "What are your strengths?", ipa: "/wʌt ɑːr jʊr strɛŋθs/", vn: "Điểm mạnh của bạn là gì?" },
                  { who: "A", s: "I'm good at communication and problem-solving.", ipa: "/aɪm ɡʊd æt kəˌmjunɪˈkeɪʃən ænd ˈprɑːbləm ˈsɑːlvɪŋ/", vn: "Tôi giỏi giao tiếp và giải quyết vấn đề." },
                  { who: "B", s: "Why do you want to work here?", ipa: "/waɪ duː juː wɑːnt tə wɜːrk hɪr/", vn: "Tại sao bạn muốn làm việc ở đây?" },
                  { who: "A", s: "I admire your company's values and growth.", ipa: "/aɪ ædˈmaɪər jʊr ˈkʌmpəniz ˈvæljuːz ænd ɡroʊθ/", vn: "Tôi ngưỡng mộ giá trị và sự phát triển của công ty bạn." },
                  { who: "B", s: "We'll be in touch within a week.", ipa: "/wil bi ɪn tʌtʃ wɪðˈɪn ə wik/", vn: "Chúng tôi sẽ liên lạc trong vòng một tuần." }
            ]
      },
      {
            id: 97,
            title: "Job Interview",
            turns: [
                  { who: "A", s: "Hello, I'm here for the job interview.", ipa: "/həˈloʊ aɪm hɪr fər ðə dʒɑːb ˈɪntərvjuː/", vn: "Xin chào, tôi đến đây để phỏng vấn việc làm." },
                  { who: "B", s: "Welcome! Please have a seat. I'm the manager.", ipa: "/ˈwɛlkəm pliz hæv ə sit aɪm ðə ˈmænɪdʒər/", vn: "Chào mừng! Làm ơn ngồi xuống. Tôi là quản lý." },
                  { who: "A", s: "Thank you. I'm excited about this opportunity.", ipa: "/ˈθæŋk juː aɪm ɪkˈsaɪtɪd əˈbaʊt ðɪs ˌɑːpərˈtunəti/", vn: "Cảm ơn. Tôi rất hào hứng với cơ hội này." },
                  { who: "B", s: "Tell me about your previous experience.", ipa: "/tɛl miː əˈbaʊt jʊr ˈpriːviəs ɪkˈspɪriəns/", vn: "Kể cho tôi nghe về kinh nghiệm trước đây của bạn." },
                  { who: "A", s: "I worked as a sales assistant for two years.", ipa: "/aɪ wɜːrkt æz ə seɪlz əˈsɪstənt fər tuː jɪrz/", vn: "Tôi làm trợ lý bán hàng trong hai năm." },
                  { who: "B", s: "What are your strengths?", ipa: "/wʌt ɑːr jʊr strɛŋθs/", vn: "Điểm mạnh của bạn là gì?" },
                  { who: "A", s: "I'm good at communication and problem-solving.", ipa: "/aɪm ɡʊd æt kəˌmjunɪˈkeɪʃən ænd ˈprɑːbləm ˈsɑːlvɪŋ/", vn: "Tôi giỏi giao tiếp và giải quyết vấn đề." },
                  { who: "B", s: "Why do you want to work here?", ipa: "/waɪ duː juː wɑːnt tə wɜːrk hɪr/", vn: "Tại sao bạn muốn làm việc ở đây?" },
                  { who: "A", s: "I admire your company's values and growth.", ipa: "/aɪ ædˈmaɪər jʊr ˈkʌmpəniz ˈvæljuːz ænd ɡroʊθ/", vn: "Tôi ngưỡng mộ giá trị và sự phát triển của công ty bạn." },
                  { who: "B", s: "We'll be in touch within a week.", ipa: "/wil bi ɪn tʌtʃ wɪðˈɪn ə wik/", vn: "Chúng tôi sẽ liên lạc trong vòng một tuần." }
            ]
      }
      ,
      // Meeting a Friend - Part 3 (Weekend plans)
      {
            id: 98,
            title: "Meeting a Friend",
            turns: [
                  { who: "A", s: "Hey! Do you have any plans for the weekend?", ipa: "/heɪ duː juː hæv ˈɛni plænz fər ðə ˈwiːkˌɛnd/", vn: "Này! Cuối tuần bạn có kế hoạch gì không?" },
                  { who: "B", s: "Not yet. I was thinking of going hiking. Want to join?", ipa: "/nɒt jɛt aɪ wɒz ˈθɪŋkɪŋ əv ˈɡoʊɪŋ ˈhaɪkɪŋ wɒnt tə dʒɔɪn/", vn: "Chưa. Mình nghĩ đi leo núi. Bạn muốn đi cùng không?" },
                  { who: "A", s: "Sounds great. Where would we go?", ipa: "/saʊndz ɡreɪt wɛr wʊd wiː ɡoʊ/", vn: "Nghe hay đó. Chúng ta sẽ đi đâu?" },
                  { who: "B", s: "There's a trail two hours away with nice views.", ipa: "/ðɛrz ə treɪl tuː ˈaʊərz əˈweɪ wɪð naɪs vjuːz/", vn: "Có một đường mòn cách đây hai tiếng với cảnh rất đẹp." },
                  { who: "A", s: "What should I bring?", ipa: "/wɒt ʃʊd aɪ brɪŋ/", vn: "Mình nên mang gì?" },
                  { who: "B", s: "Just water, snacks, and comfortable shoes.", ipa: "/dʒʌst ˈwɔːtər snæks ænd ˈkʌmfərtəbəl ʃuːz/", vn: "Chỉ cần nước, đồ ăn nhẹ và giày thoải mái." },
                  { who: "A", s: "Perfect. What time do we leave?", ipa: "/ˈpɜːrfɪkt wɒt taɪm doʊ wiː liːv/", vn: "Tuyệt. Chúng ta đi mấy giờ?" },
                  { who: "B", s: "Let's meet at 7 AM so we can finish before noon.", ipa: "/lɛts miːt æt sɛvən eɪˈɛm soʊ wiː kæn ˈfɪnɪʃ bɪˈfɔːr nuːn/", vn: "Gặp lúc 7 sáng để kịp xong trước trưa." },
                  { who: "A", s: "I'll bring a small first-aid kit just in case.", ipa: "/aɪl brɪŋ ə smɔːl fɜːrst eɪd kɪt dʒʌst ɪn keɪs/", vn: "Mình sẽ mang bộ sơ cứu nhỏ cho chắc." },
                  { who: "B", s: "Great — see you Saturday then!", ipa: "/ɡreɪt siː juː ˈsætərdeɪ ðɛn/", vn: "Tuyệt — hẹn gặp thứ Bảy nhé!" }
            ]
      }
      ,
      // Meeting a Friend - Part 4 (Catching up after a long time)
      {
            id: 99,
            title: "Meeting a Friend",
            turns: [
                  { who: "A", s: "It's been ages! How have you been?", ipa: "/ɪts bɪn eɪdʒɪz haʊ hæv juː bɪn/", vn: "Lâu rồi nha! Dạo này bạn thế nào?" },
                  { who: "B", s: "Busy with work, but I'm doing well. You?", ipa: "/ˈbɪzi wɪð wɜːrk bət aɪm ˈduːɪŋ wɛl juː/", vn: "Bận công việc, nhưng mình ổn. Còn bạn?" },
                  { who: "A", s: "Same here. I started a new job last month.", ipa: "/seɪm hɪər aɪ ˈstɑːrtəd ə njuː dʒɒb lɑːst mʌnθ/", vn: "Mình cũng thế. Mình bắt đầu công việc mới tháng trước." },
                  { who: "B", s: "Congrats! How's the new place?", ipa: "/kənˈɡræts haʊz ðə njuː pleɪs/", vn: "Chúc mừng! Chỗ mới thế nào?" },
                  { who: "A", s: "Nice team and flexible hours. I enjoy it so far.", ipa: "/naɪs tiːm ænd ˈflɛksəbəl aʊərz aɪ ɪnˈdʒɔɪ ɪt soʊ fɑːr/", vn: "Đội tốt và giờ linh hoạt. Mình thích đến giờ." },
                  { who: "B", s: "We should catch up properly — dinner this week?", ipa: "/wiː ʃʊd kætʃ ʌp ˈprɒpərli ˈdɪnər ðɪs wiːk/", vn: "Chúng ta nên hẹn ăn tối để kể chuyện — tuần này nhé?" },
                  { who: "A", s: "I'd love that. How about Thursday at 7?", ipa: "/aɪd lʌv ðæt haʊ əˈbaʊt ˈθɜːrzdeɪ æt sɛvən/", vn: "Mình rất muốn. Thứ Năm lúc 7 được không?" },
                  { who: "B", s: "Works for me. Any restaurant you prefer?", ipa: "/wɜːrks fər miː ˈɛni ˈrɛstrɒnt juː prɪˈfɜːr/", vn: "Được, bạn thích nhà hàng nào không?" },
                  { who: "A", s: "Let's try that new Thai place near the station.", ipa: "/lɛts traɪ ðæt njuː taɪ pleɪs nɪər ðə ˈsteɪʃən/", vn: "Thử quán Thái mới gần ga nhé." },
                  { who: "B", s: "Perfect — I'll reserve a table for two.", ipa: "/ˈpɜːrfɪkt aɪl rɪˈzɜːrv ə ˈteɪbəl fər tuː/", vn: "Hoàn hảo — mình sẽ đặt bàn cho hai người." }
            ]
      }
      ,
      // Meeting a Friend - Part 5 (Asking for a favor / Borrowing something)
      {
            id: 100,
            title: "Meeting a Friend",
            turns: [
                  { who: "A", s: "Can I ask you a favor?", ipa: "/kæn aɪ æsk juː ə ˈfeɪvər/", vn: "Mình có thể nhờ bạn một việc không?" },
                  { who: "B", s: "Sure, what do you need?", ipa: "/ʃʊr wɒt duː juː niːd/", vn: "Được, bạn cần gì?" },
                  { who: "A", s: "I'm out of town next week — could you water my plants?", ipa: "/aɪm aʊt əv taʊn nɛkst wiːk kʊd juː ˈwɔːtər maɪ plænts/", vn: "Mình đi khỏi thành phố tuần tới — bạn tưới cây giúp mình được không?" },
                  { who: "B", s: "No problem. How often should I water them?", ipa: "/noʊ ˈprɒbləm haʊ ˈɒfən ʃʊd aɪ ˈwɔːtər ðəm/", vn: "Không vấn đề. Bạn muốn tưới bao lâu một lần?" },
                  { who: "A", s: "Every two days would be perfect.", ipa: "/ˈɛvri tuː deɪz wʊd bi ˈpɜːrfɪkt/", vn: "Cách hai ngày một lần là tốt nhất." },
                  { who: "B", s: "Got it. Do you have a key or should I pick up a spare?", ipa: "/ɡɒt ɪt duː juː hæv ə kiː ɔːr ʃʊd aɪ pɪk ʌp ə spɛər/", vn: "Hiểu rồi. Bạn có chìa không hay mình lấy chìa dự phòng?" },
                  { who: "A", s: "I'll leave a spare under the mat. Thanks a lot!", ipa: "/aɪl liːv ə spɛər ˈʌndər ðə mæt θæŋks ə lɒt/", vn: "Mình sẽ để chìa dưới thảm. Cảm ơn nhiều!" },
                  { who: "B", s: "No worries. Anything else you need me to do?", ipa: "/noʊ ˈwʌriz ˈɛniθɪŋ ɛls juː niːd miː tə duː/", vn: "Không sao. Bạn có cần mình làm gì khác không?" },
                  { who: "A", s: "Could you also collect mail if it piles up?", ipa: "/kʊd juː ˈɔːlsoʊ kəˈlɛkt meɪl ɪf ɪt paɪlz ʌp/", vn: "Bạn cũng thu thư giúp nếu chồng lên nhé?" },
                  { who: "B", s: "Sure — I'll take care of it. Have a safe trip!", ipa: "/ʃʊr aɪl teɪk kɛər əv ɪt hæv ə seɪf trɪp/", vn: "Được — mình lo giúp. Đi cẩn thận nhé!" }
            ]
      }
            ,
            // Making a Phone Call - Part 3
            {
                  id: 101,
                  title: "Making a Phone Call",
                  turns: [
                        { who: "A", s: "Hello, may I speak with Anna, please?", ipa: "/həˈloʊ meɪ aɪ spiːk wɪð ˈænə pliz/", vn: "Xin chào, tôi có thể nói chuyện với Anna được không?" },
                        { who: "B", s: "This is Anna speaking. Who's calling?", ipa: "/ðɪs ɪz ˈænə ˈspiːkɪŋ huz ˈkɔːlɪŋ/", vn: "Mình là Anna đây. Ai đang gọi?" },
                        { who: "A", s: "Hi Anna, it's Tom from the office. Are you free to talk?", ipa: "/haɪ ˈænə ɪts tɒm frəm ði ˈɒfɪs ɑːr juː friː tə tɔːk/", vn: "Chào Anna, mình là Tom ở văn phòng. Bạn có rảnh nói chuyện không?" },
                        { who: "B", s: "Yes, I have a few minutes. What's up?", ipa: "/jɛs aɪ hæv ə fjuː ˈmɪnɪts wʌts ʌp/", vn: "Có, mình có vài phút. Có chuyện gì?" },
                        { who: "A", s: "Just confirming the meeting time for tomorrow.", ipa: "/dʒʌst kənˈfɜːrmɪŋ ðə ˈmiːtɪŋ taɪm fə təˈmɒroʊ/", vn: "Chỉ xác nhận giờ họp cho ngày mai." },
                        { who: "B", s: "We're on for 10 AM in Conference Room B.", ipa: "/wɪr ɒn fər tɛn eɪˈɛm ɪn ˈkɒnfərəns ruːm biː/", vn: "Chúng ta gặp lúc 10h sáng trong Phòng họp B." },
                        { who: "A", s: "Great — I'll bring the presentation slides.", ipa: "/ɡreɪt aɪl brɪŋ ðə ˌprɛzənˈteɪʃən slaɪdz/", vn: "Tuyệt — tôi sẽ mang slide thuyết trình." },
                        { who: "B", s: "Perfect. See you then.", ipa: "/ˈpɜːrfɪkt siː juː ðɛn/", vn: "Hoàn hảo. Hẹn gặp bạn." },
                        { who: "A", s: "Thanks, Anna. Bye.", ipa: "/θæŋks ˈænə baɪ/", vn: "Cảm ơn Anna. Tạm biệt." },
                        { who: "B", s: "Bye, Tom.", ipa: "/baɪ tɒm/", vn: "Tạm biệt, Tom." }
                  ]
            }
            ,
            // Making a Phone Call - Part 4
            {
                  id: 102,
                  title: "Making a Phone Call",
                  turns: [
                        { who: "A", s: "Good morning, I'm calling about my appointment.", ipa: "/ɡʊd ˈmɔːrnɪŋ aɪm ˈkɔːlɪŋ əˈbaʊt maɪ əˈpɔɪntmənt/", vn: "Chào buổi sáng, tôi gọi về cuộc hẹn của mình." },
                        { who: "B", s: "Sure — what's your name, please?", ipa: "/ʃʊr wʌts jʊr neɪm pliz/", vn: "Vâng — bạn tên gì?" },
                        { who: "A", s: "It's Lan Nguyen. I had a 2 PM slot today.", ipa: "/ɪts lɑːn ˈnɡwiən aɪ hæd ə tuː piːɛm slɒt təˈdeɪ/", vn: "Tôi là Lan Nguyen. Tôi có lịch lúc 2 giờ chiều hôm nay." },
                        { who: "B", s: "Let me check... It looks like we need to reschedule.", ipa: "/lɛt miː tʃɛk ɪt lʊks laɪk wi niːd tə ˌriːˈskɛdjuːl/", vn: "Để tôi kiểm tra... Hình như chúng ta cần dời lịch." },
                        { who: "A", s: "Oh, I see. When is the next available slot?", ipa: "/oʊ aɪ siː wɛn ɪz ðə nɛkst əˈveɪləbl slɒt/", vn: "Ồ, tôi hiểu. Khi nào có lịch trống tiếp theo?" },
                        { who: "B", s: "We have 4:30 PM or tomorrow morning at 9.", ipa: "/wi hæv fɔːr ˈθɜːrti piːɛm ɔːr təˈmɒroʊ ˈmɔːrnɪŋ æt naɪn/", vn: "Chúng tôi có 4:30 chiều hoặc sáng mai lúc 9 giờ." },
                        { who: "A", s: "4:30 works for me. Please book it.", ipa: "/fɔːr ˈθɜːrti wɜːrks fər miː pliz bʊk ɪt/", vn: "4:30 phù hợp với tôi. Xin đặt giúp." },
                        { who: "B", s: "Done — you're booked for 4:30 PM.", ipa: "/dʌn jʊr bʊkt fər fɔːr ˈθɜːrti piːɛm/", vn: "Xong — bạn đã được đặt lúc 4:30 chiều." },
                        { who: "A", s: "Thank you very much.", ipa: "/ˈθæŋk juː ˈvɛri mʌtʃ/", vn: "Cảm ơn rất nhiều." },
                        { who: "B", s: "You're welcome. See you then.", ipa: "/jʊr ˈwɛlkəm siː juː ðɛn/", vn: "Không có gì. Hẹn gặp lại." }
                  ]
            }
            ,
            // Making a Phone Call - Part 5
            {
                  id: 103,
                  title: "Making a Phone Call",
                  turns: [
                        { who: "A", s: "Hi, I'm calling to report a problem with my order.", ipa: "/haɪ aɪm ˈkɔːlɪŋ tə rɪˈpɔːrt ə ˈprɒbləm wɪð maɪ ˈɔːrdər/", vn: "Xin chào, tôi gọi để báo lỗi với đơn hàng của mình." },
                        { who: "B", s: "I'm sorry to hear that. Can you give me your order number?", ipa: "/aɪm ˈsɒri tə hɪər ðæt kæn juː ɡɪv miː jʊr ˈɔːrdər ˈnʌmbər/", vn: "Xin lỗi khi nghe vậy. Bạn cho tôi số đơn hàng được không?" },
                        { who: "A", s: "Yes, it's 78945. The item arrived damaged.", ipa: "/jɛs ɪts ˈsɛvən eɪt naɪn fɔːr faɪv ði ˈaɪtəm əˈraɪvd ˈdæmɪdʒd/", vn: "Vâng, là 78945. Hàng bị hỏng khi nhận." },
                        { who: "B", s: "I apologize. We'll arrange a replacement or refund.", ipa: "/aɪ əˈpɒlədʒaɪz wil əˈreɪndʒ ə rɪˈpleɪsmənt ɔːr ˈriːfʌnd/", vn: "Xin lỗi. Chúng tôi sẽ sắp xếp gửi hàng thay thế hoặc hoàn tiền." },
                        { who: "A", s: "I'd prefer a replacement, please.", ipa: "/aɪd prɪˈfɜːr ə rɪˈpleɪsmənt pliz/", vn: "Tôi muốn được thay hàng, làm ơn." },
                        { who: "B", s: "Okay. We'll ship a new one today and email tracking.", ipa: "/oʊˈkeɪ wil ʃɪp ə njuː wʌn təˈdeɪ ænd ˈiːmeɪl ˈtrækɪŋ/", vn: "Được rồi. Chúng tôi sẽ gửi hàng mới hôm nay và email mã theo dõi." },
                        { who: "A", s: "Thank you for your help.", ipa: "/ˈθæŋk juː fər jʊr hɛlp/", vn: "Cảm ơn sự giúp đỡ của bạn." },
                        { who: "B", s: "You're welcome. Anything else I can do?", ipa: "/jʊr ˈwɛlkəm ˈɛniθɪŋ ɛls aɪ kæn duː/", vn: "Không có gì. Còn gì tôi có thể giúp không?" },
                        { who: "A", s: "No, that's all. Thanks again.", ipa: "/noʊ ðæts ɔːl θæŋks əˈɡeɪn/", vn: "Không, vậy là xong. Cảm ơn lần nữa." },
                        { who: "B", s: "Have a nice day!", ipa: "/hæv ə naɪs deɪ/", vn: "Chúc bạn một ngày tốt lành!" }
                  ]
            }

                  ,
                  // 104-106: At the Airport - Parts 3,4,5
                  {
                        id: 104,
                        title: "At the Airport",
                        turns: [
                              { who: "A", s: "Could you tell me where the currency exchange is?", ipa: "/kʊd juː tɛl miː wɛr ðə ˈkʌrənsi ɪksˈtʃeɪndʒ ɪz/", vn: "Bạn có thể cho tôi biết quầy đổi tiền ở đâu không?" },
                              { who: "B", s: "It's beside the information desk in the main terminal.", ipa: "/ɪts bɪˈsaɪd ði ˌɪnfərˈmeɪʃən dɛsk ɪn ðə meɪn ˈtɜːrmɪnəl/", vn: "Nó bên cạnh quầy thông tin ở nhà ga chính." },
                              { who: "A", s: "Do they accept cards or cash only?", ipa: "/duː ðeɪ əkˈsɛpt kɑːrdz ɔːr kæʃ ˈoʊnli/", vn: "Họ chấp nhận thẻ hay chỉ tiền mặt?" },
                              { who: "B", s: "They accept both, but rates are better with cash.", ipa: "/ðeɪ əkˈsɛpt boʊθ bət reɪts ɑːr ˈbɛtər wɪð kæʃ/", vn: "Họ nhận cả hai, nhưng tỉ giá tốt hơn nếu dùng tiền mặt." },
                              { who: "A", s: "Is there a fee for exchanging small amounts?", ipa: "/ɪz ðɛr ə fiː fər ɪksˈtʃeɪndʒɪŋ smɔːl əˈmaʊnts/", vn: "Có phí khi đổi số tiền nhỏ không?" },
                              { who: "B", s: "A small service charge may apply for under $50.", ipa: "/ə smɔːl ˈsɜːrvɪs tʃɑːrdʒ meɪ əˈplaɪ fər ˈʌndər fɪfti/", vn: "Có thể tính phí dịch vụ nhỏ cho dưới $50." },
                              { who: "A", s: "Thanks — where can I find a restroom?", ipa: "/θæŋks wɛr kæn aɪ faɪnd ə ˈrɛstrum/", vn: "Cảm ơn — tôi có thể tìm nhà vệ sinh ở đâu?" },
                              { who: "B", s: "Restrooms are down the corridor past security on your left.", ipa: "/ˈrɛstrʊmz ɑːr daʊn ðə ˈkɒrɪdɔːr pɑːst sɪˈkjʊrəti ɒn jʊr lɛft/", vn: "Nhà vệ sinh ở hành lang sau khu an ninh, bên trái của bạn." },
                              { who: "A", s: "Is there a place to get a SIM card?", ipa: "/ɪz ðɛr ə pleɪs tə ɡɛt ə sɪm kɑːrd/", vn: "Có chỗ mua SIM không?" },
                              { who: "B", s: "Yes, kiosks near the arrivals area sell SIMs with data plans.", ipa: "/jɛs ˈkioʊsks nɪər ði əˈraɪvəlz ˈɛriə sɛl sɪmz wɪð ˈdeɪtə plænz/", vn: "Có, các quầy gần khu đến bán SIM kèm gói dữ liệu." }
                        ]
                  }
                  ,
                  {
                        id: 105,
                        title: "At the Airport",
                        turns: [
                              { who: "A", s: "Excuse me, is there a lost and found here?", ipa: "/ɪkˈskjuːz miː ɪz ðɛr ə lɒst ænd faʊnd hɪər/", vn: "Xin lỗi, có quầy thất lạc ở đây không?" },
                              { who: "B", s: "Yes, it's at the customer service counter near Gate 2.", ipa: "/jɛs ɪts æt ðə ˈkʌstəmər ˈsɜːrvɪs ˈkaʊntər nɪər ɡeɪt tuː/", vn: "Có, ở quầy dịch vụ khách hàng cạnh Cửa 2." },
                              { who: "A", s: "I think I left my headphones on the plane.", ipa: "/aɪ θɪŋk aɪ lɛft maɪ ˈhɛdfəʊnz ɒn ðə pleɪn/", vn: "Tôi nghĩ tôi để quên tai nghe trên máy bay." },
                              { who: "B", s: "Please fill out this form and we'll contact the airline.", ipa: "/pliz fɪl aʊt ðɪs fɔːrm ænd wil ˈkɒntækt ðə ˈɛərlaɪn/", vn: "Làm ơn điền mẫu này và chúng tôi sẽ liên hệ hãng hàng không." },
                              { who: "A", s: "How long until I hear back?", ipa: "/haʊ lɔːŋ ənˈtɪl aɪ hɪər bæk/", vn: "Bao lâu tôi sẽ nhận phản hồi?" },
                              { who: "B", s: "Usually within 48 hours, depending on the airline.", ipa: "/ˈjuːʒəli wɪˈðɪn fɔːrti eɪt ˈaʊərz dɪˈpɛndɪŋ ɒn ði ˈɛərlaɪn/", vn: "Thông thường trong vòng 48 giờ, tùy hãng hàng không." },
                              { who: "A", s: "Can I leave my contact number?", ipa: "/kæn aɪ liːv maɪ ˈkɒntækt ˈnʌmbər/", vn: "Tôi có thể để lại số liên hệ không?" },
                              { who: "B", s: "Yes, we will call or email you when it's found.", ipa: "/jɛs wi wil kɔːl ɔːr ˈiːmeɪl juː wɛn ɪts faʊnd/", vn: "Vâng, chúng tôi sẽ gọi hoặc email bạn khi tìm thấy." },
                              { who: "A", s: "Thank you for your help.", ipa: "/ˈθæŋk juː fər jʊr hɛlp/", vn: "Cảm ơn đã giúp đỡ." },
                              { who: "B", s: "You're welcome. Safe travels!", ipa: "/jʊr ˈwɛlkəm seɪf ˈtrævəlz/", vn: "Không có gì. Chúc bạn đi đường an toàn!" }
                        ]
                  }
                  ,
                  {
                        id: 106,
                        title: "At the Airport",
                        turns: [
                              { who: "A", s: "Is there a place to buy snacks after security?", ipa: "/ɪz ðɛr ə pleɪs tə baɪ snæks ˈæftər sɪˈkjʊrɪti/", vn: "Có chỗ mua đồ ăn vặt sau khi qua an ninh không?" },
                              { who: "B", s: "Yes, several shops and a small cafe in the departure lounge.", ipa: "/jɛs ˈsɛvrəl ʃɒps ænd ə smɔːl kæfeɪ ɪn ðə dɪˈpɑːrtʃər laʊndʒ/", vn: "Có, vài cửa hàng và quán cà phê nhỏ ở phòng chờ đi." },
                              { who: "A", s: "Do they accept foreign currency?", ipa: "/duː ðeɪ əkˈsɛpt ˈfɒrɪn ˈkʌrənsi/", vn: "Họ có chấp nhận ngoại tệ không?" },
                              { who: "B", s: "Most shops accept cards; some will accept major currencies.", ipa: "/moʊst ʃɒps əkˈsɛpt kɑːrdz sʌm wɪl əkˈsɛpt ˈmeɪdʒər ˈkʌrənsiːz/", vn: "Hầu hết cửa hàng chấp nhận thẻ; một số chấp nhận các ngoại tệ chính." },
                              { who: "A", s: "Is Wi-Fi free here?", ipa: "/ɪz waɪ faɪ friː hɪər/", vn: "Wi-Fi ở đây có miễn phí không?" },
                              { who: "B", s: "Yes, connect to 'Airport_Free_WiFi' and follow the instructions.", ipa: "/jɛs kəˈnɛkt tə eərˈpɔːrt friː waɪfaɪ ænd ˈfɒləʊ ði ɪnˈstrʌkʃənz/", vn: "Vâng, kết nối vào 'Airport_Free_WiFi' và làm theo hướng dẫn." },
                              { who: "A", s: "Where can I rent a car from the airport?", ipa: "/wɛr kæn aɪ rɛnt ə kɑːr frəm ði ˈeərpɔːrt/", vn: "Ở đâu tôi có thể thuê xe tại sân bay?" },
                              { who: "B", s: "Car rental counters are in the arrivals hall; buses shuttle to the rental center.", ipa: "/kɑːr ˈrɛntəl ˈkaʊntərz ɑːr ɪn ði əˈraɪvəlz hɔːl bʌsɪz ˈʃʌtəl tə ðə ˈrɛntəl ˈsɛntər/", vn: "Quầy thuê xe ở sảnh đến; có xe buýt đưa đến trung tâm thuê xe." },
                              { who: "A", s: "Great — thank you for the information.", ipa: "/ɡreɪt θæŋk juː fər ði ˌɪnfərˈmeɪʃən/", vn: "Tuyệt — cảm ơn vì thông tin." },
                              { who: "B", s: "Have a pleasant journey!", ipa: "/hæv ə ˈplɛzənt ˈdʒɜːrni/", vn: "Chúc bạn một hành trình suôn sẻ!" }
                        ]
                  }
                              ,
                              // 107-109: Booking a Hotel Room - Parts 3,4,5
                              {
                                    id: 107,
                                    title: "Booking a Hotel Room",
                                    turns: [
                                          { who: "A", s: "Do you have rooms with two beds?", ipa: "/duː juː hæv ruːmz wɪð tuː bɛdz/", vn: "Bạn có phòng hai giường không?" },
                                          { who: "B", s: "Yes, we have twin rooms and family suites available.", ipa: "/jɛs wiː hæv twɪn ruːmz ænd ˈfæmɪli sjuːts əˈveɪləbl/", vn: "Có, chúng tôi có phòng twin và suite gia đình." },
                                          { who: "A", s: "Is breakfast included in the rate?", ipa: "/ɪz ˈbrɛkfəst ɪnˈkluːdɪd ɪn ðə reɪt/", vn: "Bữa sáng đã bao gồm trong giá chưa?" },
                                          { who: "B", s: "Some rates include breakfast; please check the room details.", ipa: "/sʌm reɪts ɪnˈkluːd ˈbrɛkfəst pliz tʃɛk ðə rum ˈdiːteɪlz/", vn: "Một số giá đã bao gồm bữa sáng; vui lòng kiểm tra chi tiết phòng." },
                                          { who: "A", s: "Can I request a late check-in?", ipa: "/kæn aɪ rɪˈkwɛst ə leɪt tʃɛk ɪn/", vn: "Tôi có thể yêu cầu check-in muộn không?" },
                                          { who: "B", s: "Yes, our reception is open 24/7 for late arrivals.", ipa: "/jɛs aʊər rɪˈsɛpʃən ɪz ˈoʊpən ˌtwɛnti fɔːr ˈsɛvən fər leɪt əˈraɪvəlz/", vn: "Có, quầy lễ tân mở 24/7 cho khách đến muộn." },
                                          { who: "A", s: "Is there free Wi-Fi in the rooms?", ipa: "/ɪz ðɛr friː waɪ faɪ ɪn ðə ruːmz/", vn: "Có Wi-Fi miễn phí trong phòng không?" },
                                          { who: "B", s: "Yes, complimentary Wi-Fi is available for all guests.", ipa: "/jɛs kəmˈplɪməntəri waɪ faɪ ɪz əˈveɪləbl fər ɔːl ɡɛsts/", vn: "Có, Wi-Fi miễn phí cho mọi khách." },
                                          { who: "A", s: "Do you offer airport shuttle service?", ipa: "/duː juː ˈɔːfər ˈeərpɔːrt ˈʃʌtəl ˈsɜːrvɪs/", vn: "Bạn có dịch vụ đưa đón sân bay không?" },
                                          { who: "B", s: "Yes, we provide shuttle service with prior booking.", ipa: "/jɛs wi prəˈvaɪd ˈʃʌtəl ˈsɜːrvɪs wɪð praɪər ˈbʊkɪŋ/", vn: "Có, chúng tôi có dịch vụ đưa đón nếu đặt trước." }
                                    ]
                              }
                              ,
                              {
                                    id: 108,
                                    title: "Booking a Hotel Room",
                                    turns: [
                                          { who: "A", s: "I'd like to add an extra bed to the room.", ipa: "/aɪd laɪk tə æd æn ˈɛkstrə bɛd tə ðə rum/", vn: "Tôi muốn thêm giường phụ vào phòng." },
                                          { who: "B", s: "We can add a rollaway bed for an extra charge.", ipa: "/wi kæn æd ə ˈroʊləweɪ bɛd fər ən ˈɛkstrə tʃɑːrdʒ/", vn: "Chúng tôi có thể thêm giường phụ với phí thêm." },
                                          { who: "A", s: "Is there a children's discount?", ipa: "/ɪz ðɛr ə ˈtʃɪldrənz dɪsˈkaʊnt/", vn: "Có giảm giá cho trẻ em không?" },
                                          { who: "B", s: "Yes, children under 12 stay free with existing bedding.", ipa: "/jɛs ˈtʃɪldrən ˌʌndər twɛlv steɪ friː wɪð ɪɡˈzɪstɪŋ ˈbɛdɪŋ/", vn: "Có, trẻ dưới 12 tuổi ở miễn phí nếu dùng giường có sẵn." },
                                          { who: "A", s: "Can I request a high floor?", ipa: "/kæn aɪ rɪˈkwɛst ə haɪ flɔːr/", vn: "Tôi có thể yêu cầu tầng cao không?" },
                                          { who: "B", s: "Requests are subject to availability but we'll note your preference.", ipa: "/rɪˈkwɛsts ɑːr ˈsʌbdʒɪkt tə əˌveɪləˈbɪləti bʌt wil noʊt jʊr ˈprɛfərəns/", vn: "Yêu cầu tùy thuộc tình trạng phòng nhưng chúng tôi sẽ ghi lại sở thích của bạn." },
                                          { who: "A", s: "What time is check-out?", ipa: "/wɒt taɪm ɪz tʃɛk aʊt/", vn: "Giờ trả phòng là mấy giờ?" },
                                          { who: "B", s: "Standard check-out is at 11 AM; late check-out available on request.", ipa: "/ˈstændərd tʃɛk aʊt ɪz æt ɪl ɛl eɪvɛn eɪ ɛm leɪt tʃɛk aʊt əˈveɪləbl ɒn rɪˈkwɛst/", vn: "Trả phòng tiêu chuẩn vào 11h; trả muộn có thể sắp xếp theo yêu cầu." },
                                          { who: "A", s: "Do you charge for parking?", ipa: "/duː juː tʃɑːrdʒ fər ˈpɑːrkɪŋ/", vn: "Bạn có tính phí đậu xe không?" },
                                          { who: "B", s: "We offer valet parking for $10 per night.", ipa: "/wi ˈɔːfər ˈvæleɪ ˈpɑːrkɪŋ fər tɛn pər naɪt/", vn: "Chúng tôi có dịch vụ trông xe giá $10/đêm." }
                                    ]
                              }
                              ,
                              {
                                    id: 109,
                                    title: "Booking a Hotel Room",
                                    turns: [
                                          { who: "A", s: "Can I pay now or on arrival?", ipa: "/kæn aɪ peɪ naʊ ɔːr ɒn əˈraɪvəl/", vn: "Tôi có thể thanh toán bây giờ hay khi đến?" },
                                          { who: "B", s: "We accept both prepayment and payment on arrival.", ipa: "/wi əkˈsɛpt boʊθ ˌpriːˈpeɪmənt ænd ˈpeɪmənt ɒn əˈraɪvəl/", vn: "Chúng tôi chấp nhận thanh toán trước hoặc khi đến." },
                                          { who: "A", s: "Do you need a credit card to hold the booking?", ipa: "/duː juː niːd ə ˈkrɛdɪt kɑːrd tə hoʊld ðə ˈbʊkɪŋ/", vn: "Bạn có cần thẻ tín dụng để giữ chỗ không?" },
                                          { who: "B", s: "Yes, a card is required to guarantee the reservation.", ipa: "/jɛs ə kɑːrd ɪz rɪˈkwaɪərd tə ˈɡærənti ðə ˌrɛzərˈveɪʃən/", vn: "Có, cần thẻ để đảm bảo đặt phòng." },
                                          { who: "A", s: "What is your cancellation policy?", ipa: "/wɒt ɪz jʊr ˌkænsəˈleɪʃən ˈpɒlɪsi/", vn: "Chính sách hủy phòng của bạn là gì?" },
                                          { who: "B", s: "Free cancellation up to 24 hours before arrival for most rates.", ipa: "/friː ˌkænsəˈleɪʃən ʌp tə ˈtwɛnti fɔːr ˈaʊərz bɪˈfɔːr əˈraɪvəl fər moʊst reɪts/", vn: "Hủy miễn phí đến 24 giờ trước khi đến cho hầu hết giá." },
                                          { who: "A", s: "Can I get a receipt for payment?", ipa: "/kæn aɪ ɡɛt ə rɪˈsiːt fər ˈpeɪmənt/", vn: "Tôi có thể nhận biên lai khi thanh toán không?" },
                                          { who: "B", s: "Of course — we'll provide a receipt at checkout.", ipa: "/əv kɔːrs wil prəˈvaɪd ə rɪˈsiːt æt tʃɛk aʊt/", vn: "Tất nhiên — chúng tôi sẽ cung cấp biên lai khi trả phòng." },
                                          { who: "A", s: "Do you have accessible rooms?", ipa: "/duː juː hæv ækˈsɛsəbəl ruːmz/", vn: "Bạn có phòng cho người khuyết tật không?" },
                                          { who: "B", s: "Yes, we have accessible rooms with roll-in showers.", ipa: "/jɛs wi hæv ækˈsɛsəbəl ruːmz wɪð roʊl-ɪn ˈʃaʊərz/", vn: "Có, chúng tôi có phòng phù hợp cho người khuyết tật với buồng tắm roll-in." }
                                    ]
                              }
                                          ,
                                          // 110-112: At the Hotel Reception - Parts 3,4,5
                                          {
                                                id: 110,
                                                title: "At the Hotel Reception",
                                                turns: [
                                                      { who: "A", s: "Good afternoon — can I leave my luggage here until tonight?", ipa: "/ɡʊd ˌæftərˈnuːn kæn aɪ liːv maɪ ˈlʌɡɪdʒ hɪər ənˈtɪl təˈnaɪt/", vn: "Chào buổi chiều — tôi có thể gửi hành lý ở đây đến tối nay không?" },
                                                      { who: "B", s: "Yes, we offer luggage storage for guests free of charge.", ipa: "/jɛs wi ˈɔːfər ˈlʌɡɪdʒ ˈstɔːrɪdʒ fər ɡɛsts friː əv tʃɑːrdʒ/", vn: "Có, chúng tôi có dịch vụ giữ hành lý miễn phí cho khách." },
                                                      { who: "A", s: "Can I charge my phone at the desk?", ipa: "/kæn aɪ tʃɑːrdʒ maɪ foʊn æt ðə dɛsk/", vn: "Tôi có thể sạc điện thoại ở quầy không?" },
                                                      { who: "B", s: "Yes, we have charging cables and a charging station available.", ipa: "/jɛs wi hæv ˈtʃɑːrdʒɪŋ ˈkeɪbəlz ænd ə ˈtʃɑːrdʒɪŋ ˈsteɪʃən əˈveɪləbl/", vn: "Có, chúng tôi có cáp sạc và trạm sạc." },
                                                      { who: "A", s: "Is breakfast served in the lobby?", ipa: "/ɪz ˈbrɛkfəst sɜːrvd ɪn ðə ˈlɒbi/", vn: "Bữa sáng phục vụ ở sảnh không?" },
                                                      { who: "B", s: "Breakfast is in the dining room on the first floor from 7–10 AM.", ipa: "/ˈbrɛkfəst ɪz ɪn ðə ˈdaɪnɪŋ rum ɒn ðə fɜːrst flɔːr frəm sɛvən tə tɛn eɪ ˈɛm/", vn: "Bữa sáng ở phòng ăn tầng 1 từ 7–10 giờ." },
                                                      { who: "A", s: "Can you recommend a taxi service?", ipa: "/kæn juː ˌrɛkəˈmɛnd ə ˈtæksi ˈsɜːrvɪs/", vn: "Bạn có thể giới thiệu dịch vụ taxi không?" },
                                                      { who: "B", s: "We can call a taxi for you or arrange a ride via the app.", ipa: "/wi kæn kɔːl ə ˈtæksi fər juː ɔːr əˈreɪndʒ ə raɪd vaɪ ði æp/", vn: "Chúng tôi có thể gọi taxi cho bạn hoặc đặt qua ứng dụng." },
                                                      { who: "A", s: "Do you have a map of the city?", ipa: "/duː juː hæv ə mæp əv ðə ˈsɪti/", vn: "Bạn có bản đồ thành phố không?" },
                                                      { who: "B", s: "Yes — here is a map and some brochures with local attractions.", ipa: "/jɛs hɪər ɪz ə mæp ænd sʌm ˈbroʊʃərz wɪð ˈloʊkəl əˈtrækʃənz/", vn: "Có — đây là bản đồ và tờ rơi về các điểm tham quan địa phương." }
                                                ]
                                          }
                                          ,
                                          {
                                                id: 111,
                                                title: "At the Hotel Reception",
                                                turns: [
                                                      { who: "A", s: "Could I get a wake-up call at 6 AM?", ipa: "/kʊd aɪ ɡɛt ə ˈweɪk ʌp kɔːl æt sɪks eɪˈɛm/", vn: "Tôi có thể yêu cầu gọi báo thức lúc 6 giờ sáng không?" },
                                                      { who: "B", s: "Certainly — we'll schedule a wake-up call for you.", ipa: "/ˈsɜːrtənli wil ˈskɛdjuːl ə ˈweɪk ʌp kɔːl fər juː/", vn: "Chắc chắn — chúng tôi sẽ lên lịch gọi báo thức cho bạn." },
                                                      { who: "A", s: "Is there a safe in the room for valuables?", ipa: "/ɪz ðɛr ə seɪf ɪn ðə rum fər ˈvæljʊəbəlz/", vn: "Có két an toàn trong phòng để đồ có giá trị không?" },
                                                      { who: "B", s: "Yes, each room has a secure safe; ask at check-in for instructions.", ipa: "/jɛs iːtʃ rum hæz ə sɪˈkjʊər seɪf æsk æt tʃɛk ɪn fər ɪnˈstrʌkʃənz/", vn: "Có, mỗi phòng có két an toàn; hỏi khi nhận phòng để biết hướng dẫn." },
                                                      { who: "A", s: "Can I request extra towels?", ipa: "/kæn aɪ rɪˈkwɛst ˈɛkstrə ˈtaʊəlz/", vn: "Tôi có thể yêu cầu thêm khăn tắm không?" },
                                                      { who: "B", s: "Yes, housekeeping will bring extra towels to your room.", ipa: "/jɛs ˈhaʊskiːpɪŋ wɪl brɪŋ ˈɛkstrə ˈtaʊəlz tə jʊr rum/", vn: "Có, bộ phận buồng sẽ mang khăn thêm đến phòng bạn." },
                                                      { who: "A", s: "Is there a place to store bicycles?", ipa: "/ɪz ðɛr ə pleɪs tə stɔːr ˈbaɪsɪkəlz/", vn: "Có chỗ để giữ xe đạp không?" },
                                                      { who: "B", s: "We have a small storage room for bicycles; speak to reception.", ipa: "/wi hæv ə smɔːl ˈstɔːrɪdʒ rum fər ˈbaɪsɪkəlz spiːk tə rɪˈsɛpʃən/", vn: "Chúng tôi có kho nhỏ để giữ xe đạp; liên hệ lễ tân." },
                                                      { who: "A", s: "Do you provide city tour tickets?", ipa: "/duː juː prəˈvaɪd ˈsɪti tʊər ˈtɪkɪts/", vn: "Bạn có cung cấp vé tham quan thành phố không?" },
                                                      { who: "B", s: "Yes, we can book tours and excursions at the desk.", ipa: "/jɛs wi kæn bʊk tʊərz ænd ɪksˈkɜːrʒənz æt ðə dɛsk/", vn: "Có, chúng tôi có thể đặt tour và dã ngoại tại quầy." }
                                                ]
                                          }
                                          ,
                                          {
                                                id: 112,
                                                title: "At the Hotel Reception",
                                                turns: [
                                                      { who: "A", s: "My room key isn't working. Can you fix it?", ipa: "/maɪ rum kiː ˈɪzənt ˈwɜːrkɪŋ kæn juː fɪks ɪt/", vn: "Chìa khóa phòng của tôi không hoạt động. Bạn có thể sửa không?" },
                                                      { who: "B", s: "I'll issue a new key right away; please bring your ID.", ipa: "/aɪl ˈɪʃuː ə njuː kiː raɪt əˈweɪ pliz brɪŋ jʊr aɪˈdiː/", vn: "Tôi sẽ cấp chìa khóa mới ngay; vui lòng mang theo giấy tờ tùy thân." },
                                                      { who: "A", s: "Can I pay for minibar items on the bill?", ipa: "/kæn aɪ peɪ fər ˈmɪnibar ˈaɪtəmz ɒn ðə bɪl/", vn: "Tôi có thể thanh toán đồ minibar vào hóa đơn không?" },
                                                      { who: "B", s: "Yes, minibar charges will appear on your final bill.", ipa: "/jɛs ˈmɪnibar tʃɑːrdʒɪz wɪl əˈpɪr ɒn jʊr ˈfaɪnəl bɪl/", vn: "Có, phí minibar sẽ xuất hiện trên hóa đơn cuối cùng của bạn." },
                                                      { who: "A", s: "I need an adapter for my laptop. Do you have one?", ipa: "/aɪ niːd ən əˈdæptər fər maɪ ˈlæptɒp duː juː hæv wʌn/", vn: "Tôi cần adapter cho laptop. Bạn có không?" },
                                                      { who: "B", s: "We have adapters available at the desk for guests to borrow.", ipa: "/wi hæv əˈdæptərz əˈveɪləbl æt ðə dɛsk fər ɡɛsts tə ˈbɒroʊ/", vn: "Chúng tôi có adapter cho khách mượn tại quầy." },
                                                      { who: "A", s: "Is there a shuttle to the train station?", ipa: "/ɪz ðɛr ə ˈʃʌtəl tə ðə treɪn ˈsteɪʃən/", vn: "Có xe đưa đón đến ga tàu không?" },
                                                      { who: "B", s: "Yes, we run a complimentary shuttle to the main station at set times.", ipa: "/jɛs wi rʌn ə kəmˈplɪməntəri ˈʃʌtəl tə ðə meɪn ˈsteɪʃən æt sɛt taɪmz/", vn: "Có, chúng tôi có xe đưa đón miễn phí đến ga chính theo khung giờ." },
                                                      { who: "A", s: "Do you accept large packages for storage?", ipa: "/duː juː əkˈsɛpt lɑːrdʒ ˈpækɪdʒɪz fər ˈstɔːrɪdʒ/", vn: "Bạn có nhận gửi kiện hàng lớn để lưu kho không?" },
                                                      { who: "B", s: "Yes, we can arrange secure storage for larger items.", ipa: "/jɛs wi kæn əˈreɪndʒ sɪˈkjʊər ˈstɔːrɪdʒ fər ˈlɑːrdʒər ˈaɪtəmz/", vn: "Có, chúng tôi có thể sắp xếp kho an toàn cho hàng lớn." }
                                                ]
                                          }
                                                      ,
                                                      // 113-115: Buying Bus Tickets - Parts 3,4,5
                                                      {
                                                            id: 113,
                                                            title: "Buying Bus Tickets",
                                                            turns: [
                                                                  { who: "A", s: "Do you sell tourist passes here?", ipa: "/duː juː sɛl ˈtʊərɪst pæsɪz hɪər/", vn: "Bạn có bán vé du lịch ở đây không?" },
                                                                  { who: "B", s: "Yes, we have a 3-day pass and a weekly pass available.", ipa: "/jɛs wi hæv ə θriː deɪ pæs ænd ə ˈwiːkli pæs əˈveɪləbl/", vn: "Có, chúng tôi có vé 3 ngày và vé tuần." },
                                                                  { who: "A", s: "How much is the 3-day pass?", ipa: "/haʊ mʌtʃ ɪz ðə θriː deɪ pæs/", vn: "Vé 3 ngày giá bao nhiêu?" },
                                                                  { who: "B", s: "The 3-day pass is $18 and includes unlimited rides.", ipa: "/ðə θriː deɪ pæs ɪz eɪtiːn dɒlərz ænd ɪnˈkluːdz ʌnˈlɪmɪtɪd raɪdz/", vn: "Vé 3 ngày là $18 và bao gồm đi không giới hạn." },
                                                                  { who: "A", s: "Do I need to validate the ticket on the bus?", ipa: "/duː aɪ niːd tə ˈvælɪdeɪt ðə ˈtɪkɪt ɒn ðə bʌs/", vn: "Tôi có cần quét vé trên xe buýt không?" },
                                                                  { who: "B", s: "Yes, please validate at the machine when boarding.", ipa: "/jɛs pliz ˈvælɪdeɪt æt ðə məˈʃiːn wɛn ˈbɔːrdɪŋ/", vn: "Vâng, vui lòng quét vé ở máy khi lên xe." },
                                                                  { who: "A", s: "Are children free with a pass?", ipa: "/ɑːr ˈtʃɪldrən friː wɪð ə pæs/", vn: "Trẻ em có được miễn phí với vé không?" },
                                                                  { who: "B", s: "Children under 5 travel free; ages 5–12 get a discounted fare.", ipa: "/ˈtʃɪldrən ˌʌndər faɪv ˈtrævəl friː eɪdʒɪz faɪv tə twɛlv ɡɛt ə dɪsˈkaʊntɪd fɛər/", vn: "Trẻ dưới 5 tuổi miễn phí; 5–12 tuổi được giảm giá." },
                                                                  { who: "A", s: "Can I buy tickets on the bus?", ipa: "/kæn aɪ baɪ ˈtɪkɪts ɒn ðə bʌs/", vn: "Tôi có thể mua vé trên xe không?" },
                                                                  { who: "B", s: "Yes, but exact change is required if buying onboard.", ipa: "/jɛs bʌt ɪɡˈzækt tʃeɪndʒ ɪz rɪˈkwaɪəd ɪf ˈbaɪɪŋ ɔːnˈbɔːrd/", vn: "Có, nhưng cần tiền lẻ nếu mua trên xe." }
                                                            ]
                                                      }
                                                      ,
                                                      {
                                                            id: 114,
                                                            title: "Buying Bus Tickets",
                                                            turns: [
                                                                  { who: "A", s: "Is there a student discount for monthly passes?", ipa: "/ɪz ðɛr ə ˈstjuːdənt dɪsˈkaʊnt fər ˈmʌnθli pæsɪz/", vn: "Có giảm giá sinh viên cho vé tháng không?" },
                                                                  { who: "B", s: "Yes, students can get a reduced fare with a valid ID.", ipa: "/jɛs ˈstjuːdənts kæn ɡɛt ə rɪˈdjuːst fɛər wɪð ə ˈvælɪd aɪˈdiː/", vn: "Có, sinh viên được giảm giá nếu có ID hợp lệ." },
                                                                  { who: "A", s: "How do I top up my travel card?", ipa: "/haʊ duː aɪ tɒp ʌp maɪ ˈtrævəl kɑːrd/", vn: "Làm sao để nạp tiền vào thẻ giao thông?" },
                                                                  { who: "B", s: "You can top up at machines, service desks, or online.", ipa: "/juː kæn tɒp ʌp æt məˈʃiːnz ˈsɜːrvɪs dɛsks ɔːr ˈɒnlaɪn/", vn: "Bạn có thể nạp tại máy, quầy dịch vụ hoặc trực tuyến." },
                                                                  { who: "A", s: "Do monthly passes auto-renew?", ipa: "/duː ˈmʌnθli pæsɪz ˌɔːtəʊ rɪˈnjuː/", vn: "Vé tháng có tự động gia hạn không?" },
                                                                  { who: "B", s: "They can auto-renew if you enable auto top-up on your account.", ipa: "/ðeɪ kæn ˌɔːtəʊ rɪˈnjuː ɪf juː ɪˈneɪbəl ˈɔːtəʊ tɒp ʌp ɒn jʊr əˈkaʊnt/", vn: "Có thể tự gia hạn nếu bạn bật tự động nạp tiền trên tài khoản." },
                                                                  { who: "A", s: "What happens if I lose my travel card?", ipa: "/wɒt ˈhæpənz ɪf aɪ luːz maɪ ˈtrævəl kɑːrd/", vn: "Nếu tôi làm mất thẻ giao thông thì sao?" },
                                                                  { who: "B", s: "Report it at a service desk to block the card and get a replacement.", ipa: "/rɪˈpɔːrt ɪt æt ə ˈsɜːrvɪs dɛsk tə blɒk ðə kɑːrd ænd ɡɛt ə rɪˈpleɪsmənt/", vn: "Báo ở quầy để khóa thẻ và nhận thẻ thay thế." },
                                                                  { who: "A", s: "Can I transfer a monthly pass to another card?", ipa: "/kæn aɪ trænsˈfɜːr ə ˈmʌnθli pæs tə əˈnʌðər kɑːrd/", vn: "Tôi có thể chuyển vé tháng sang thẻ khác không?" },
                                                                  { who: "B", s: "Yes, transfers can be done at the service office with ID.", ipa: "/jɛs trænsˈfɜːrz kæn bi dʌn æt ðə ˈsɜːrvɪs ˈɒfɪs wɪð aɪˈdiː/", vn: "Có, chuyển có thể thực hiện tại quầy dịch vụ với ID." }
                                                            ]
                                                      }
                                                      ,
                                                      {
                                                            id: 115,
                                                            title: "Buying Bus Tickets",
                                                            turns: [
                                                                  { who: "A", s: "Are there night buses in this city?", ipa: "/ɑːr ðɛr naɪt bʌsɪz ɪn ðɪs ˈsɪti/", vn: "Có xe buýt đêm ở thành phố này không?" },
                                                                  { who: "B", s: "Yes, limited night routes run on weekends and holidays.", ipa: "/jɛs ˈlɪmɪtɪd naɪt ruːts rʌn ɒn ˈwiːkɛndz ænd ˈhɒlɪdeɪz/", vn: "Có, có một số tuyến đêm vào cuối tuần và ngày lễ." },
                                                                  { who: "A", s: "How safe are night buses?", ipa: "/haʊ seɪf ɑːr naɪt bʌsɪz/", vn: "Xe buýt đêm an toàn như thế nào?" },
                                                                  { who: "B", s: "They are generally safe but take usual precautions at night.", ipa: "/ðeɪ ɑːr ˈdʒɛnərəli seɪf bət teɪk ˈjuːʒuəl prɪˈkɔːʃənz æt naɪt/", vn: "Nói chung an toàn nhưng vẫn nên thận trọng vào ban đêm." },
                                                                  { who: "A", s: "Can I see the night timetable?", ipa: "/kæn aɪ siː ðə naɪt ˈtaɪmteɪbəl/", vn: "Tôi có thể xem lịch trình ban đêm không?" },
                                                                  { who: "B", s: "Check the transport website or the service desk for night routes.", ipa: "/tʃɛk ðə ˈtrænspɔːrt ˈwɛbsaɪt ɔːr ðə ˈsɜːrvɪs dɛsk fər naɪt ruːts/", vn: "Kiểm tra trang web giao thông hoặc quầy dịch vụ để biết tuyến đêm." },
                                                                  { who: "A", s: "Do buses run on public holidays?", ipa: "/duː bʌsɪz rʌn ɒn ˈpʌblɪk ˈhɒlɪdeɪz/", vn: "Xe buýt có chạy vào ngày lễ không?" },
                                                                  { who: "B", s: "Yes, but schedules may be reduced on holidays.", ipa: "/jɛs bət ˈskɛdjuːlz meɪ bi rɪˈdjuːst ɒn ˈhɒlɪdeɪz/", vn: "Có, nhưng lịch trình có thể ít hơn vào ngày lễ." },
                                                                  { who: "A", s: "Where can I find route maps?", ipa: "/wɛr kæn aɪ faɪnd ruːt mæps/", vn: "Tôi có thể tìm bản đồ tuyến ở đâu?" },
                                                                  { who: "B", s: "Route maps are at the ticket office and online on the transport site.", ipa: "/ruːt mæps ɑːr æt ðə ˈtɪkɪt ˈɔːfɪs ænd ˈɒnlaɪn ɒn ðə ˈtrænspɔːrt saɪt/", vn: "Bản đồ tuyến có ở quầy bán vé và trên trang web giao thông." }
                                                            ]
                                                            },

                                                      // New parts added: ids 143-156 (Job Interview parts 1-5; At the Bank parts 3-5; At the Post Office parts 3-5; At the Gym parts 3-5)

                                                {
                                                      id: 143,
                                                      title: "Job Interview",
                                                      turns: [
                                                            { who: "A", s: "Hello, I'm here for the interview.", ipa: "/həˈloʊ aɪm hɪr fər ðə ˌɪntərˈvjuː/", vn: "Xin chào, tôi đến phỏng vấn." },
                                                            { who: "B", s: "Welcome. Please have a seat and tell me about yourself.", ipa: "/ˈwɛlkəm pliz hæv ə siːt ænd tɛl mi əˈbaʊt jɔːrˈsɛlf/", vn: "Chào mừng. Ngồi đi và nói về bản thân bạn." },
                                                            { who: "A", s: "I have five years of experience in customer service.", ipa: "/aɪ hæv faɪv jɪərz əv ɪkˈspɪəriəns ɪn ˈkʌstəmər ˈsɜːrvɪs/", vn: "Tôi có 5 năm kinh nghiệm chăm sóc khách hàng." },
                                                            { who: "B", s: "What attracted you to this role?", ipa: "/wʌt əˈtræktɪd juː tə ðɪs roʊl/", vn: "Điều gì thu hút bạn ở vị trí này?" },
                                                            { who: "A", s: "I'm excited to grow in a fast-paced environment.", ipa: "/aɪm ɪkˈsaɪtɪd tə ɡroʊ ɪn ə fɑːrst peɪst ɪnˈvaɪrənmənt/", vn: "Tôi muốn phát triển trong môi trường năng động." },
                                                            { who: "B", s: "Can you describe a challenge you overcame?", ipa: "/kæn juː dɪˈskraɪb ə ˈtʃælɪndʒ juː ˌoʊvərˈkeɪm/", vn: "Bạn mô tả một thử thách bạn đã vượt qua được không?" },
                                                            { who: "A", s: "I improved our response time by reorganizing the team schedule.", ipa: "/aɪ ɪmˈpruːvd aʊər rɪˈspɒns taɪm baɪ ˌriːˈɔːrɡənaɪzɪŋ ðə tiːm ˈskɛdʒuːl/", vn: "Tôi cải thiện thời gian phản hồi bằng cách sắp xếp lại lịch đội." },
                                                            { who: "B", s: "That's impressive. What are your salary expectations?", ipa: "/ðæts ɪmˈprɛsɪv wʌt ɑːr jʊr ˈsæləri ˌɛkspɛkˈteɪʃənz/", vn: "Thật ấn tượng. Mức lương mong muốn của bạn là bao nhiêu?" },
                                                            { who: "A", s: "I'd like to discuss a competitive package based on responsibilities.", ipa: "/aɪd laɪk tə dɪsˈkʌs ə kəmˈpɛtətɪv ˈpækɪdʒ beɪst ɒn rɪˌspɒnsəˈbɪlɪtiz/", vn: "Tôi muốn thảo luận về gói lương cạnh tranh dựa trên trách nhiệm công việc." },
                                                            { who: "B", s: "Thank you — we'll review and get back to you soon.", ipa: "/ˈθæŋk ju wil rɪˈvjuː ænd ɡɛt bæk tə juː suːn/", vn: "Cảm ơn — chúng tôi sẽ xem xét và phản hồi sớm." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 144,
                                                      title: "Job Interview",
                                                      turns: [
                                                            { who: "A", s: "Could you tell me more about the daily responsibilities?", ipa: "/kʊd juː tɛl miː mɔːr əˈbaʊt ðə ˈdeɪli rɪˌspɒnsəˈbɪlɪtiz/", vn: "Bạn có thể cho biết thêm về trách nhiệm hàng ngày không?" },
                                                            { who: "B", s: "You'll handle client inquiries and coordinate with operations.", ipa: "/juːl ˈhændəl ˈklaɪənt ɪnˈkwaɪəriz ænd kəʊˈɔːrdɪneɪt wɪð ˌɒpəˈreɪʃənz/", vn: "Bạn sẽ xử lý yêu cầu khách hàng và phối hợp với bộ phận vận hành." },
                                                            { who: "A", s: "Is there room for professional development?", ipa: "/ɪz ðɛr rʊm fər prəˈfɛʃənəl dɪˈvɛləpmənt/", vn: "Có cơ hội phát triển nghề nghiệp không?" },
                                                            { who: "B", s: "Yes, we offer training and support for certifications.", ipa: "/jɛs wi ˈɔːfər ˈtreɪnɪŋ ænd səˈpɔːrt fər ˌsɜːrtɪfɪˈkeɪʃənz/", vn: "Có, chúng tôi cung cấp đào tạo và hỗ trợ lấy chứng chỉ." },
                                                            { who: "A", s: "How would success be measured in this role?", ipa: "/haʊ wʊd səkˈsɛs bi ˈmɛʒəd ɪn ðɪs roʊl/", vn: "Thành công trong vị trí này được đo bằng gì?" },
                                                            { who: "B", s: "By customer satisfaction, response time, and team collaboration.", ipa: "/baɪ ˈkʌstəmər ˌsætɪsˈfækʃən rɪˈspɒns taɪm ænd tiːm kəˌlæbəˈreɪʃən/", vn: "Bằng sự hài lòng khách hàng, thời gian phản hồi và hợp tác trong nhóm." },
                                                            { who: "A", s: "Who would I report to?", ipa: "/huː wʊd aɪ rɪˈpɔːrt tə/", vn: "Tôi sẽ báo cáo cho ai?" },
                                                            { who: "B", s: "The team manager and occasionally the regional director.", ipa: "/ðə tiːm ˈmænɪdʒər ænd əˈkeɪʒənəli ðə ˌriːdʒənl dɪˈrɛktər/", vn: "Quản lý nhóm và thỉnh thoảng giám đốc khu vực." },
                                                            { who: "A", s: "What's the expected start date?", ipa: "/wʌts ði ɪkˈspɛktɪd stɑːrt deɪ/", vn: "Ngày bắt đầu dự kiến là khi nào?" },
                                                            { who: "B", s: "We hope to have someone start within the next month.", ipa: "/wi hoʊp tə hæv ˈsʌmwʌn stɑːrt wɪðɪn ðə nɛkst mʌnθ/", vn: "Chúng tôi hy vọng có người bắt đầu trong tháng tới." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 145,
                                                      title: "Job Interview",
                                                      turns: [
                                                            { who: "A", s: "Can you tell me about the team I'll be working with?", ipa: "/kæn juː tɛl mi əˈbaʊt ðə tiːm aɪl bi ˈwɜːrkɪŋ wɪð/", vn: "Bạn cho biết về đội mà tôi sẽ làm việc cùng được không?" },
                                                            { who: "B", s: "It's a small cross-functional team with diverse experience.", ipa: "/ɪts ə smɔːl krɒs fʌŋkʃənəl tiːm wɪð daɪˈvɜːrs ɪkˈspɪəriəns/", vn: "Là đội nhỏ đa chức năng với kinh nghiệm đa dạng." },
                                                            { who: "A", s: "Are there regular performance reviews?", ipa: "/ɑːr ðɛr ˈrɛɡjələr pəˈfɔːrməns rɪˈvjuːz/", vn: "Có đánh giá hiệu suất định kỳ không?" },
                                                            { who: "B", s: "Yes, quarterly reviews and ongoing feedback.", ipa: "/jɛs ˈkwɔːrtərli rɪˈvjuːz ænd ˈɒnɡoʊɪŋ ˈfiːdbæk/", vn: "Có, đánh giá hàng quý và phản hồi liên tục." },
                                                            { who: "A", s: "Will there be travel involved?", ipa: "/wɪl ðɛr bi ˈtrævəl ɪnˈvɒlvd/", vn: "Có phải đi công tác không?" },
                                                            { who: "B", s: "Occasional travel for client meetings is expected.", ipa: "/əˈkeɪʒənəl ˈtrævəl fər ˈklaɪənt ˈmiːtɪŋz ɪz ɪkˈspɛktɪd/", vn: "Thỉnh thoảng đi gặp khách hàng." },
                                                            { who: "A", s: "What is the company's approach to work-life balance?", ipa: "/wʌt ɪz ðə ˈkʌmpəniz əˈproʊtʃ tə wɜːrk laɪf ˈbæləns/", vn: "Công ty có chính sách cân bằng công việc-cuộc sống thế nào?" },
                                                            { who: "B", s: "We encourage flexible hours and remote work when possible.", ipa: "/wi ɪnˈkʌrɪdʒ ˈflɛksəbəl ˈaʊərz ænd rɪˈmoʊt wɜːrk wɛn ˈpɒsəbəl/", vn: "Chúng tôi khuyến khích giờ linh hoạt và làm việc từ xa khi có thể." },
                                                            { who: "A", s: "Thank you for the details — may I have your contact to follow up?", ipa: "/ˈθæŋk ju fər ðə ˈdiːteɪlz meɪ aɪ hæv jʊr ˈkɒntækt tə ˈfɒloʊ ʌp/", vn: "Cảm ơn, tôi có thể xin liên hệ để trao đổi thêm không?" },
                                                            { who: "B", s: "Of course — here's my card.", ipa: "/əv kɔːrs hɪərz maɪ kɑːrd/", vn: "Tất nhiên — đây là danh thiếp của tôi." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 146,
                                                      title: "Job Interview",
                                                      turns: [
                                                            { who: "A", s: "Do you provide onboarding training for new hires?", ipa: "/duː juː prəˈvaɪd ˈɒnbɔːrdɪŋ ˈtreɪnɪŋ fər njuː ˈhaɪərz/", vn: "Công ty có chương trình đào tạo cho nhân viên mới không?" },
                                                            { who: "B", s: "Yes, there's a two-week onboarding program and mentorship.", ipa: "/jɛs ðɛrz ə tuː wiːk ˈɒnbɔːrdɪŋ ˈproʊɡræm ænd ˈmɛntɔːrʃɪp/", vn: "Có, chương trình 2 tuần và có người hướng dẫn." },
                                                            { who: "A", s: "How soon after hiring do benefits start?", ipa: "/haʊ suːn ˈæftər ˈhaɪərɪŋ duː ˈbɛnɪfɪts stɑːrt/", vn: "Lợi ích bắt đầu sau khi nhận việc bao lâu?" },
                                                            { who: "B", s: "Benefits start after the 30-day probation period.", ipa: "/ˈbɛnɪfɪts stɑːrt ˈæftər ðə ˈθɜːrti deɪ prəˈbeɪʃən ˈpɪəriəd/", vn: "Lợi ích bắt đầu sau 30 ngày thử việc." },
                                                            { who: "A", s: "Is there a probationary review?", ipa: "/ɪz ðɛr ə prəˈbeɪʃənəri rɪˈvjuː/", vn: "Có đánh giá thử việc không?" },
                                                            { who: "B", s: "Yes, at the end of the probation we'll review performance.", ipa: "/jɛs æt ði ɛnd əv ðə prəˈbeɪʃən wil rɪˈvjuː pəˈfɔːrməns/", vn: "Có, sau thử việc sẽ đánh giá hiệu suất." },
                                                            { who: "A", s: "Who will be my mentor during training?", ipa: "/huː wɪl bi maɪ ˈmɛntɔːr ˈdʊərɪŋ ˈtreɪnɪŋ/", vn: "Ai sẽ là người hướng dẫn tôi trong thời gian đào tạo?" },
                                                            { who: "B", s: "A senior team member will be assigned as your mentor.", ipa: "/ə ˈsiːnjər tiːm ˈmɛmbər wɪl bi əˈsaɪnd æz jʊr ˈmɛntɔːr/", vn: "Một thành viên cấp cao sẽ được phân công làm người hướng dẫn." },
                                                            { who: "A", s: "Thank you. I look forward to the opportunity.", ipa: "/ˈθæŋk juː aɪ lʊk ˈfɔːrwərd tə ði ˌɒpərˈtjuːnəti/", vn: "Cảm ơn. Tôi mong chờ cơ hội này." },
                                                            { who: "B", s: "We'll be in touch soon. Have a great day.", ipa: "/wil bi ɪn tʌtʃ suːn hæv ə ɡreɪt deɪ/", vn: "Chúng tôi sẽ liên hệ sớm. Chúc bạn một ngày tốt lành." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 147,
                                                      title: "Job Interview",
                                                      turns: [
                                                            { who: "A", s: "May I ask about the company's culture?", ipa: "/meɪ aɪ ɑːsk əˈbaʊt ðə ˈkʌmpəniz ˈkʌltʃər/", vn: "Tôi xin hỏi về văn hóa công ty?" },
                                                            { who: "B", s: "We value collaboration, transparency, and continuous learning.", ipa: "/wi ˈvæljuː kəˌlæbəˈreɪʃən trænˈspærənsi ænd kənˈtɪnjuəs ˈlɜːrnɪŋ/", vn: "Chúng tôi coi trọng hợp tác, minh bạch và học hỏi liên tục." },
                                                            { who: "A", s: "Are there team events or socials?", ipa: "/ɑːr ðɛr tiːm ɪˈvɛnts ɔːr ˈsoʊʃəlz/", vn: "Có các sự kiện đội nhóm không?" },
                                                            { who: "B", s: "Yes, monthly socials and occasional team outings.", ipa: "/jɛs ˈmʌnθli ˈsoʊʃəlz ænd əˈkeɪʒənəl tiːm ˈaʊtɪŋz/", vn: "Có, giao lưu hàng tháng và hoạt động ngoại khóa." },
                                                            { who: "A", s: "What's the next step in the hiring process?", ipa: "/wʌts ðə nɛkst stɛp ɪn ðə ˈhaɪərɪŋ ˈprəʊsɛs/", vn: "Bước tiếp theo trong quy trình tuyển dụng là gì?" },
                                                            { who: "B", s: "We'll complete interviews this week and notify shortlisted candidates.", ipa: "/wil kəmˈpliːt ˌɪntərˈvjuːz ðɪs wiːk ænd ˈnoʊtɪfaɪ ˈʃɔːrtlɪstɪd ˈkændɪdeɪts/", vn: "Chúng tôi sẽ hoàn tất phỏng vấn trong tuần này và thông báo cho ứng viên được chọn." },
                                                            { who: "A", s: "Thank you for your time. I appreciate it.", ipa: "/ˈθæŋk juː fər jʊr taɪm aɪ əˈpriːʃieɪt ɪt/", vn: "Cảm ơn vì thời gian của bạn. Tôi rất trân trọng." },
                                                            { who: "B", s: "You're welcome. We'll be in touch.", ipa: "/jʊr ˈwɛlkəm wil bi ɪn tʌtʃ/", vn: "Không có gì. Chúng tôi sẽ liên hệ." },
                                                            { who: "A", s: "Have a nice day.", ipa: "/hæv ə naɪs deɪ/", vn: "Chúc bạn một ngày tốt lành." },
                                                            { who: "B", s: "Goodbye!", ipa: "/ɡʊdˈbaɪ/", vn: "Tạm biệt!" }
                                                      ]
                                                }
                                                ,
                                                // At the Bank parts 3-5
                                                {
                                                      id: 148,
                                                      title: "At the Bank",
                                                      turns: [
                                                            { who: "A", s: "I'd like to inquire about personal loans.", ipa: "/aɪd laɪk tə ɪnˈkwaɪər əˌbaʊt ˈpɜːrsənəl loʊnz/", vn: "Tôi muốn hỏi về vay cá nhân." },
                                                            { who: "B", s: "What amount do you need and for how long?", ipa: "/wʌt əˈmaʊnt duː juː niːd ænd fər haʊ lɒŋ/", vn: "Bạn cần bao nhiêu và trong bao lâu?" },
                                                            { who: "A", s: "Around $5,000 for two years.", ipa: "/əˈraʊnd faɪv ˈθaʊzənd fər tuː jɪərz/", vn: "Khoảng 5.000 đô trong hai năm." },
                                                            { who: "B", s: "We can provide a rate estimate after a credit check.", ipa: "/wi kæn prəˈvaɪd ə reɪt ˈɛstɪmət ˈɑːftər ə ˈkrɛdɪt tʃɛk/", vn: "Chúng tôi sẽ báo lãi sau khi kiểm tra tín dụng." },
                                                            { who: "A", s: "What documents are required?", ipa: "/wʌt ˈdɒkjəmənts ɑːr rɪˈkwaɪərd/", vn: "Cần giấy tờ gì?" },
                                                            { who: "B", s: "ID, proof of income, and bank statements for the last 3 months.", ipa: "/aɪdi pruf əv ˈɪnkʌm ænd bæŋk ˈsteɪtmənts fər ðə læst θriː mʌnθs/", vn: "ID, chứng minh thu nhập và sao kê 3 tháng gần nhất." },
                                                            { who: "A", s: "How long does approval take?", ipa: "/haʊ lɒŋ dʌz əˈpruːvəl teɪk/", vn: "Phê duyệt mất bao lâu?" },
                                                            { who: "B", s: "Typically 3-5 business days after submission.", ipa: "/ˈtɪpɪkəli θriː tuː faɪv ˈbɪznəs deɪz ˈɑːftər səbˈmɪʃən/", vn: "Thông thường 3-5 ngày làm việc." },
                                                            { who: "A", s: "Is there a prepayment penalty?", ipa: "/ɪz ðɛr ə ˌpriːˈpeɪmənt ˈpɛnəlti/", vn: "Có phí trả trước không?" },
                                                            { who: "B", s: "No, you can repay early without penalty for most loans.", ipa: "/noʊ juː kæn rɪˈpeɪ ˈɜːrli wɪðaʊt ˈpɛnəlti fər moʊst loʊnz/", vn: "Không, thường không có phí trả trước." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 149,
                                                      title: "At the Bank",
                                                      turns: [
                                                            { who: "A", s: "How do I set up online bill payments?", ipa: "/haʊ duː aɪ sɛt ʌp ˈɒnlaɪn bɪl ˈpeɪmənts/", vn: "Làm sao để thiết lập thanh toán hóa đơn trực tuyến?" },
                                                            { who: "B", s: "Log into internet banking, choose 'Payments', and add a payee.", ipa: "/lɒɡ ɪntuː ˈɪntərnɛt ˈbæŋkɪŋ tʃuːz ˈpeɪmənts ænd æd ə ˈpeɪi/", vn: "Đăng nhập ngân hàng trực tuyến, chọn 'Payments' và thêm người nhận." },
                                                            { who: "A", s: "Can I schedule recurring payments?", ipa: "/kæn aɪ ˈskɛdʒuːl rɪˈkɜːrɪŋ ˈpeɪmənts/", vn: "Tôi có thể đặt thanh toán định kỳ không?" },
                                                            { who: "B", s: "Yes, set frequency and start date when adding the payee.", ipa: "/jɛs sɛt ˈfriːkwənsi ænd stɑːrt deɪ wɛn ˈædɪŋ ðə ˈpeɪi/", vn: "Có, chọn tần suất và ngày bắt đầu khi thêm người nhận." },
                                                            { who: "A", s: "Is there a fee for recurring payments?", ipa: "/ɪz ðɛr ə fiː fər rɪˈkɜːrɪŋ ˈpeɪmənts/", vn: "Có phí cho thanh toán định kỳ không?" },
                                                            { who: "B", s: "No, recurring bill payments are free for personal accounts.", ipa: "/noʊ rɪˈkɜːrɪŋ bɪl ˈpeɪmənts ɑːr friː fər ˈpɜːrsənəl əˈkaʊnts/", vn: "Không, miễn phí cho tài khoản cá nhân." },
                                                            { who: "A", s: "What about payments to international payees?", ipa: "/wʌt əˈbaʊt ˈpeɪmənts tə ˌɪntərˈnæʃənəl ˈpeɪiːz/", vn: "Còn thanh toán cho người nhận quốc tế thì sao?" },
                                                            { who: "B", s: "Those require SWIFT transfers and may incur fees.", ipa: "/ðoʊz rɪˈkwaɪər swɪft ˈtrænsfərz ænd meɪ ɪnˈkɜːr fiːz/", vn: "Cần chuyển tiền SWIFT và có thể có phí." },
                                                            { who: "A", s: "How long do international payments take?", ipa: "/haʊ lɒŋ duː ˌɪntərˈnæʃənəl ˈpeɪmənts teɪk/", vn: "Thanh toán quốc tế mất bao lâu?" },
                                                            { who: "B", s: "Typically 1-5 business days depending on destination.", ipa: "/ˈtɪpɪkəli wʌn tuː faɪv ˈbɪznəs deɪz/", vn: "Thường 1-5 ngày làm việc tùy điểm đến." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 150,
                                                      title: "At the Bank",
                                                      turns: [
                                                            { who: "A", s: "I'd like to report a lost debit card.", ipa: "/aɪd laɪk tə rɪˈpɔːrt ə lɒst ˈdɛbɪt kɑːrd/", vn: "Tôi muốn báo mất thẻ ghi nợ." },
                                                            { who: "B", s: "We'll freeze the card immediately and order a replacement.", ipa: "/wil friːz ðə kɑːrd ɪˈmiːdiətli ænd ˈɔːrdər ə rɪˈpleɪsmənt/", vn: "Chúng tôi sẽ khoá thẻ ngay và đặt thẻ thay thế." },
                                                            { who: "A", s: "Will I be charged for the replacement?", ipa: "/wɪl aɪ bi tʃɑːrdʒd fər ðə rɪˈpleɪsmənt/", vn: "Tôi có bị tính phí thay thẻ không?" },
                                                            { who: "B", s: "Standard shipping is free; expedited has a small fee.", ipa: "/ˈstændərd ˈʃɪpɪŋ ɪz friː ɪkˈspɛdɪtɪd hæz ə smɔːl fiː/", vn: "Giao thường miễn phí; giao nhanh tính phí nhỏ." },
                                                            { who: "A", s: "How long until I get the new card?", ipa: "/haʊ lɒŋ ənˈtɪl aɪ ɡɛt ðə njuː kɑːrd/", vn: "Bao lâu tôi nhận được thẻ mới?" },
                                                            { who: "B", s: "About 7-10 business days for standard delivery.", ipa: "/əˈbaʊt ˈsɛvən tən ˈbɪznəs deɪz fər ˈstændərd dɪˈlɪvəri/", vn: "Khoảng 7-10 ngày làm việc." },
                                                            { who: "A", s: "Can I withdraw cash in the meantime?", ipa: "/kæn aɪ wɪðˈdrɔː kæʃ ɪn ðə ˈmiːnˌtaɪm/", vn: "Tôi có thể rút tiền tạm thời không?" },
                                                            { who: "B", s: "Yes, visit a branch with ID and we can issue a temporary card.", ipa: "/jɛs ˈvɪzɪt ə bræŋtʃ wɪð aɪdi ænd wi kæn ˈɪʃuː ə ˈtɛmpərəri kɑːrd/", vn: "Có, đến chi nhánh với ID chúng tôi cấp thẻ tạm thời." },
                                                            { who: "A", s: "Thank you for your help.", ipa: "/ˈθæŋk ju fə jʊər hɛlp/", vn: "Cảm ơn bạn đã giúp." },
                                                            { who: "B", s: "You're welcome.", ipa: "/jʊr ˈwɛlkəm/", vn: "Không có gì." }
                                                      ]
                                                }
                                                ,
                                                // At the Post Office parts 3-5
                                                {
                                                      id: 151,
                                                      title: "At the Post Office",
                                                      turns: [
                                                            { who: "A", s: "I need to fill out a customs declaration for this package.", ipa: "/aɪ niːd tə fɪl aʊt ə ˈkʌstəmz ˌdɛkləˈreɪʃən fər ðɪs ˈpækɪdʒ/", vn: "Tôi cần khai tờ khai hải quan cho gói này." },
                                                            { who: "B", s: "Please declare the contents and value accurately.", ipa: "/pliz dɪˈklɛr ðə ˈkɒntɛnts ænd ˈvæljuː ˈækjʊrətli/", vn: "Vui lòng khai chính xác nội dung và giá trị." },
                                                            { who: "A", s: "Do I need to include an invoice?", ipa: "/duː aɪ niːd tə ɪnˈkluːd ən ˈɪnvɔɪs/", vn: "Tôi có cần đính kèm hóa đơn không?" },
                                                            { who: "B", s: "Yes for commercial goods; personal gifts may not require one.", ipa: "/jɛs fər kəˈmɜːrʃəl ɡʊdz pɜːrsənəl ɡɪfts meɪ nɒt rɪˈkwaɪər wʌn/", vn: "Có cho hàng thương mại; quà tặng cá nhân có thể không cần." },
                                                            { who: "A", s: "How do I track international parcels?", ipa: "/haʊ duː aɪ træk ˌɪntərˈnæʃənəl ˈpɑːrsəlz/", vn: "Làm sao để theo dõi bưu kiện quốc tế?" },
                                                            { who: "B", s: "Use the tracking number we provide and check online.", ipa: "/juz ðə ˈtrækɪŋ ˈnʌmbər wi prəˈvaɪd ænd tʃɛk ˈɒnlaɪn/", vn: "Dùng mã theo dõi chúng tôi cung cấp và kiểm tra trực tuyến." },
                                                            { who: "A", s: "Is there a limit on liquids?", ipa: "/ɪz ðɛr ə ˈlɪmɪt ɒn ˈlɪkwɪdz/", vn: "Có giới hạn về chất lỏng không?" },
                                                            { who: "B", s: "Some countries restrict liquids; check the destination rules.", ipa: "/sʌm ˈkʌntriz rɪˈstrɪkt ˈlɪkwɪdz tʃɛk ðə ˌdɛstɪˈneɪʃən rulz/", vn: "Một số nước hạn chế chất lỏng; kiểm tra quy định điểm đến." },
                                                            { who: "A", s: "How much will shipping cost?", ipa: "/haʊ mʌtʃ wɪl ˈʃɪpɪŋ kɒst/", vn: "Chi phí gửi bao nhiêu?" },
                                                            { who: "B", s: "I'll weigh it and give you an exact price.", ipa: "/aɪl weɪ ɪt ænd ɡɪv juː ən ɪɡˈzækt praɪs/", vn: "Tôi sẽ cân và báo giá chính xác." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 152,
                                                      title: "At the Post Office",
                                                      turns: [
                                                            { who: "A", s: "Can I purchase extra insurance for this parcel?", ipa: "/kæn aɪ pɜːrtʃəs ˈɛkstrə ɪnˈʃʊərəns fər ðɪs ˈpɑːrsəl/", vn: "Tôi có thể mua bảo hiểm thêm cho bưu kiện này không?" },
                                                            { who: "B", s: "Yes, insurance covers declared value up to selected limits.", ipa: "/jɛs ɪnˈʃʊərəns ˈkʌvərz dɪˈklɛəd ˈvæljuː ʌp tə sɪˈlɛktɪd ˈlɪmɪts/", vn: "Có, bảo hiểm áp dụng cho giá trị khai báo tới hạn mức chọn." },
                                                            { who: "A", s: "What is the delivery time for economy service?", ipa: "/wʌt ɪz ðə dɪˈlɪvəri taɪm fər ɪˈkɒnəmi ˈsɜːrvɪs/", vn: "Thời gian giao dịch vụ tiết kiệm là bao lâu?" },
                                                            { who: "B", s: "Economy can take 2-6 weeks depending on customs.", ipa: "/ɪˈkɒnəmi kæn teɪk tuː sɪks wiːks dɪˈpɛndɪŋ ɒn ˈkʌstəmz/", vn: "Tiết kiệm có thể mất 2-6 tuần tuỳ hải quan." },
                                                            { who: "A", s: "Can I change the delivery address after sending?", ipa: "/kæn aɪ tʃeɪndʒ ðə dɪˈlɪvəri əˈdrɛs ˈɑːftər ˈsɛndɪŋ/", vn: "Tôi có thể thay đổi địa chỉ giao hàng sau khi gửi không?" },
                                                            { who: "B", s: "If the parcel hasn't left the country yet, we may be able to amend it.", ipa: "/ɪf ðə ˈpɑːrsəl hæzənt lɛft ðə ˈkʌntri jɛt wi meɪ bi ˈeɪbl tə əˈmɛnd ɪt/", vn: "Nếu bưu kiện chưa rời nước, chúng tôi có thể sửa đổi." },
                                                            { who: "A", s: "Do you provide proof of posting?", ipa: "/duː juː prəˈvaɪd pruːf əv ˈpəʊstɪŋ/", vn: "Bạn có biên nhận gửi không?" },
                                                            { who: "B", s: "Yes, we give a receipt with tracking information.", ipa: "/jɛs wi ɡɪv ə rɪˈsiːt wɪð ˈtrækɪŋ ɪnfəˈmeɪʃən/", vn: "Có, chúng tôi đưa biên nhận kèm mã theo dõi." },
                                                            { who: "A", s: "Is there a surcharge for remote areas?", ipa: "/ɪz ðɛr ə ˈsɜːrtʃɑːrdʒ fər rɪˈmoʊt ˈɛəriəz/", vn: "Có phụ phí cho khu vực xa không?" },
                                                            { who: "B", s: "Some destinations have extra fees; we'll confirm when we price it.", ipa: "/sʌm ˌdɛstɪˈneɪʃənz hæv ˈɛkstrə fiːz wil kənˈfɜːrm wɛn wi praɪs ɪt/", vn: "Một số nơi có phí thêm; chúng tôi sẽ xác nhận khi tính giá." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 153,
                                                      title: "At the Post Office",
                                                      turns: [
                                                            { who: "A", s: "Can I pick up a held parcel here?", ipa: "/kæn aɪ pɪk ɪp ə hɛld ˈpɑːrsəl hɪər/", vn: "Tôi có thể nhận bưu kiện bị giữ ở đây không?" },
                                                            { who: "B", s: "Bring your ID and the notification slip and we'll retrieve it.", ipa: "/brɪŋ jʊr aɪdi ænd ðə ˌnoʊtɪfɪˈkeɪʃən slɪp ænd wil rɪˈtriːv ɪt/", vn: "Mang ID và giấy thông báo, chúng tôi sẽ lấy cho bạn." },
                                                            { who: "A", s: "Is there a holding period before return to sender?", ipa: "/ɪz ðɛr ə ˈhoʊldɪŋ ˈpɪəriəd bɪˈfɔːr rɪˈtɜːrn tə ˈsɛndər/", vn: "Thời gian giữ trước khi trả về người gửi là bao lâu?" },
                                                            { who: "B", s: "Usually 7-14 days depending on the service.", ipa: "/ˈjuːʒəli sɛvən fɔːrˈtiːn deɪz dɪˈpɛndɪŋ ɒn ðə ˈsɜːrvɪs/", vn: "Thường 7-14 ngày tùy dịch vụ." },
                                                            { who: "A", s: "Can I authorize someone else to pick it up?", ipa: "/kæn aɪ ˈɔːθəraɪz ˈsʌmwʌn ɛls tə pɪk ɪt ʌp/", vn: "Tôi có thể ủy quyền người khác nhận không?" },
                                                            { who: "B", s: "Yes, provide a signed authorization and their ID.", ipa: "/jɛs prəˈvaɪd ə saɪnd ˌɔːθəraɪˈzeɪʃən ænd ðɛər aɪdi/", vn: "Có, gửi giấy ủy quyền có ký và ID của họ." },
                                                            { who: "A", s: "What if my parcel is damaged?", ipa: "/wɒt ɪf maɪ ˈpɑːrsəl ɪz ˈdæmɪdʒd/", vn: "Nếu bưu kiện hỏng thì sao?" },
                                                            { who: "B", s: "Report it immediately; keep packaging and we'll assist with claims.", ipa: "/rɪˈpɔːrt ɪt ɪˈmiːdiətli kip ˈpækɪdʒɪŋ ænd wil əˈsɪst wɪð kleɪmz/", vn: "Báo ngay; giữ bao bì và chúng tôi hỗ trợ khiếu nại." },
                                                            { who: "A", s: "Thank you for the information.", ipa: "/ˈθæŋk ju fər ði ˌɪnfəˈmeɪʃən/", vn: "Cảm ơn vì thông tin." },
                                                            { who: "B", s: "You're welcome.", ipa: "/jʊr ˈwɛlkəm/", vn: "Không có gì." }
                                                      ]
                                                }
                                                ,
                                                // At the Gym parts 3-5
                                                {
                                                      id: 154,
                                                      title: "At the Gym",
                                                      turns: [
                                                            { who: "A", s: "Do you have a schedule for group classes this week?", ipa: "/duː juː hæv ə ˈskɛdjuːl fər ɡruːp klæsɪz ðɪs wiːk/", vn: "Bạn có lịch lớp nhóm tuần này không?" },
                                                            { who: "B", s: "Yes, yoga, spin, and HIIT classes run daily — check the board.", ipa: "/jɛs ˈjoʊɡə spɪn ænd hɪt klæsɪz rʌn ˈdeɪli tʃɛk ðə bɔːrd/", vn: "Có, yoga, spin và HIIT hàng ngày — xem bảng thông báo." },
                                                            { who: "A", s: "Is pre-booking required for popular classes?", ipa: "/ɪz ˈpriːˈbʊkɪŋ rɪˈkwaɪərd fər ˈpɒpjələr klæsɪz/", vn: "Cần đặt trước cho lớp đông không?" },
                                                            { who: "B", s: "Yes, book online to guarantee your spot.", ipa: "/jɛs bʊk ˈɒnlaɪn tə ˌɡærənˈti jɔːr spɒt/", vn: "Có, đặt trực tuyến để giữ chỗ." },
                                                            { who: "A", s: "Are there beginner-friendly sessions?", ipa: "/ɑːr ðɛr bɪˈɡɪnər ˈfrɛndli ˈsɛʃənz/", vn: "Có lớp cho người mới bắt đầu không?" },
                                                            { who: "B", s: "Yes, look for 'Beginner' in the class descriptions.", ipa: "/jɛs lʊk fər bɪˈɡɪnər ɪn ðə klæs dɪˈskrɪpʃənz/", vn: "Có, tìm 'Beginner' trong mô tả lớp." },
                                                            { who: "A", s: "Can I try a class before joining?", ipa: "/kæn aɪ traɪ ə klæs bɪˈfɔːr ˈdʒɔɪnɪŋ/", vn: "Tôi có thể thử lớp trước khi tham gia không?" },
                                                            { who: "B", s: "We offer a free trial class for new members.", ipa: "/wi ˈɔːfər ə friː traɪəl klæs fər njuː ˈmɛmbərz/", vn: "Chúng tôi có lớp thử miễn phí cho thành viên mới." },
                                                            { who: "A", s: "How do I sign up?", ipa: "/haʊ duː aɪ saɪn ʌp/", vn: "Làm sao để đăng ký?" },
                                                            { who: "B", s: "Sign up at the desk or on our app.", ipa: "/saɪn ʌp æt ðə dɛsk ɔːr ɒn aʊər æp/", vn: "Đăng ký tại quầy hoặc trên app." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 155,
                                                      title: "At the Gym",
                                                      turns: [
                                                            { who: "A", s: "Can I freeze my membership if I travel?", ipa: "/kæn aɪ friːz maɪ ˈmɛmbərʃɪp ɪf aɪ ˈtrævəl/", vn: "Tôi có thể tạm ngưng thành viên khi đi công tác không?" },
                                                            { who: "B", s: "Yes, memberships can be frozen for a minimum of one month.", ipa: "/jɛs ˈmɛmbərʃɪps kæn bi frəʊzən fər ə ˈmɪnɪməm əv wʌn mʌnθ/", vn: "Có, có thể tạm ngưng tối thiểu 1 tháng." },
                                                            { who: "A", s: "Is there a reactivation fee?", ipa: "/ɪz ðɛr ə ˌriːækˈtɪveɪʃən fiː/", vn: "Có phí kích hoạt lại không?" },
                                                            { who: "B", s: "No fee for standard freezes; special cases may vary.", ipa: "/noʊ fiː fər ˈstændərd friːzɪz ˈspɛʃəl keɪsɪz meɪ vɛri/", vn: "Không phí cho tạm ngưng tiêu chuẩn; trường hợp đặc biệt có thể khác." },
                                                            { who: "A", s: "How do I request a freeze?", ipa: "/haʊ duː aɪ rɪˈkwɛst ə friːz/", vn: "Làm sao để yêu cầu tạm ngưng?" },
                                                            { who: "B", s: "Submit a request at reception or via email with dates.", ipa: "/səbˈmɪt ə rɪˈkwɛst æt rɪˈsɛpʃən ɔːr vaɪ əˈmeɪl wɪð deɪts/", vn: "Gửi yêu cầu tại lễ tân hoặc email kèm ngày." },
                                                            { who: "A", s: "Can I transfer my membership to another person?", ipa: "/kæn aɪ trænsˈfɜːr maɪ ˈmɛmbərʃɪp tə əˈnʌðər ˈpɜːrsən/", vn: "Tôi có chuyển nhượng thành viên cho người khác được không?" },
                                                            { who: "B", s: "Transfers are allowed with management approval and a small fee.", ipa: "/trænsˈfɜːrz ɑːr əˈlaʊd wɪð ˈmænɪdʒmənt əˈpruːvəl ænd ə smɔːl fiː/", vn: "Cho phép chuyển nhượng khi quản lý đồng ý và có phí nhỏ." },
                                                            { who: "A", s: "Thank you — that's helpful.", ipa: "/ˈθæŋk ju ðæts ˈhɛlpfəl/", vn: "Cảm ơn — rất hữu ích." },
                                                            { who: "B", s: "You're welcome.", ipa: "/jʊr ˈwɛlkəm/", vn: "Không có gì." }
                                                      ]
                                                }
                                                ,
                                                {
                                                      id: 156,
                                                      title: "At the Gym",
                                                      turns: [
                                                            { who: "A", s: "Do you offer personal training packages?", ipa: "/duː juː ˈɔːfər ˈpɜːrsənəl ˈtreɪnɪŋ ˈpækɪdʒɪz/", vn: "Bạn có gói huấn luyện cá nhân không?" },
                                                            { who: "B", s: "Yes, we have 10-session and 20-session packages with discounts.", ipa: "/jɛs wi hæv tɛn ˈsɛʃən ænd twɛnti ˈsɛʃən ˈpækɪdʒɪz wɪð dɪsˈkaʊnts/", vn: "Có, gói 10 và 20 buổi có giảm giá." },
                                                            { who: "A", s: "Can I choose the trainer?", ipa: "/kæn aɪ tʃuːz ðə ˈtreɪnər/", vn: "Tôi có chọn huấn luyện viên không?" },
                                                            { who: "B", s: "You can request a specific trainer subject to availability.", ipa: "/juː kæn rɪˈkwɛst ə spəˈsɪfɪk ˈtreɪnər ˈsʌbdʒɪkt tə əˌveɪləˈbɪləti/", vn: "Bạn có thể yêu cầu huấn luyện viên cụ thể nếu còn lịch." },
                                                            { who: "A", s: "Are sessions one-on-one?", ipa: "/ɑːr ˈsɛʃənz wʌn ɒn wʌn/", vn: "Buổi tập là 1-1 phải không?" },
                                                            { who: "B", s: "Yes, personal training is private and tailored to goals.", ipa: "/jɛs ˈpɜːrsənəl ˈtreɪnɪŋ ɪz ˈpraɪvət ænd ˈteɪləd tə ɡoʊlz/", vn: "Đúng, huấn luyện cá nhân riêng và theo mục tiêu." },
                                                            { who: "A", s: "How do I book sessions?", ipa: "/haʊ duː aɪ bʊk ˈsɛʃənz/", vn: "Làm sao để đặt buổi tập?" },
                                                            { who: "B", s: "Book at reception or through our website calendar.", ipa: "/bʊk æt rɪˈsɛpʃən ɔːr θruː aʊər ˈwɛbsaɪt ˈkælɪndər/", vn: "Đặt tại lễ tân hoặc qua lịch trên website." },
                                                            { who: "A", s: "Thank you for the information.", ipa: "/ˈθæŋk ju fər ði ˌɪnfəˈmeɪʃən/", vn: "Cảm ơn vì thông tin." },
                                                            { who: "B", s: "My pleasure.", ipa: "/maɪ ˈplɛʒər/", vn: "Rất vui được giúp." }
                                                      ]
                                                }
                                    ];

                                    // Vietnamese translations for dialogue titles (updated)
                                    const titleVN = {
      "Asking for Directions": "Hỏi đường",
      "At the Airport": "Ở sân bay",
      "At the Bank": "Ở ngân hàng",
      "At the Doctor's Office": "Ở phòng khám bác sĩ",
      "At the Gym": "Ở phòng gym",
      "At the Hotel Reception": "Ở lễ tân khách sạn",
      "At the Library": "Ở thư viện",
      "At the Post Office": "Ở bưu điện",
      "At the Restaurant": "Ở nhà hàng",
      "At the Supermarket": "Ở siêu thị",
      "Booking a Hotel Room": "Đặt phòng khách sạn",
      "Buying Bus Tickets": "Mua vé xe buýt",
      "Meeting a Friend": "Gặp bạn bè",
      "Ordering Food": "Gọi đồ ăn",
      "Shopping for Clothes": "Mua quần áo",
      "Job Interview": "Phỏng vấn việc làm",
      "Making a Phone Call": "Gọi điện thoại",
      "At the Coffee Shop": "Ở quán cà phê",
      "At the Pharmacy": "Ở hiệu thuốc",
      "Movie Theater": "Ở rạp chiếu phim",
      "Hair Salon": "Ở tiệm cắt tóc"
};

// NOTE: Any runtime merging or dedupe of `additionalDialogues` is intentionally
// moved to `script.js` so this file remains data-only. The application will
// merge `additionalDialogues` at load time when needed.