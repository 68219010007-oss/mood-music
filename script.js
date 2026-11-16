
document.addEventListener("DOMContentLoaded", function () {

    const songs = [
        // เพลงรัก
        { name: "โต๊ะริม", artist: "NONT TANONT", category: "love" },
        { name: "ลาลาลอย", artist: "The TOYS", category: "love" },
        { name: "รักแรกพบ", artist: "Tattoo Colour", category: "love" },
        { name: "คู่ชีวิต", artist: "COCKTAIL", category: "love" },
        { name: "แค่คุณ", artist: "Musketeers", category: "love" },
        { name: "ดาวหางฮัลเลย์", artist: "fellow fellow", category: "love" },
        { name: "เธอทั้งนั้น", artist: "Groove Riders", category: "love" },
        { name: "คลั่งรัก", artist: "First Anuwat", category: "love" },
        { name: "ยินดีที่ไม่รู้จัก", artist: "25hours", category: "love" },
        { name: "ลืมไปแล้วว่าลืมยังไง", artist: "Jeff Satur", category: "love" },

        // เพลงไทบ้าน
        { name: "กอดเสาเถียง", artist: "ปรีชา ปัดภัย", category: "isan" },
        { name: "ไสว่าสิบ่ถิ่มกัน", artist: "ก้อง ห้วยไร่", category: "isan" },
        { name: "ถิ่มอ้ายไว้ตรงนี้ล่ะ", artist: "ไผ่ พงศธร", category: "isan" },
        { name: "อ้ายมีเหตุผล", artist: "เบิ้ล ปทุมราช", category: "isan" },
        { name: "ห่อหมกฮวกไปฝากป้า", artist: "เต๊ะ ตระกูลตอ", category: "isan" },
        { name: "บักจีเหลิน", artist: "จีเหลิน สายหมอบ", category: "isan" },
        { name: "สิงึดติ", artist: "เต๊ะ ตระกูลตอ", category: "isan" },
        { name: "เต่างอย", artist: "จินตหรา พูนลาภ", category: "isan" },
        { name: "จื่อบ่", artist: "ก้านตอง ทุ่งเงิน", category: "isan" },
        { name: "คำแพง", artist: "แซ็ค ชุมแพ", category: "isan" },

        // เพลงเศร้า
        { name: "วิงวอน", artist: "BOWKYLION", category: "sad" },
        { name: "ได้แต่นึกถึง", artist: "Only Monday", category: "sad" },
        { name: "ลบไม่ได้ช่วยให้ลืม", artist: "Ink Waruntorn", category: "sad" },
        { name: "ถ้าเราเจอกันอีก", artist: "Tilly Birds", category: "sad" },
        { name: "ฝนตกไหม", artist: "Three Man Down", category: "sad" },
        { name: "ทิ้งไว้กลางทาง", artist: "POTATO", category: "sad" },
        { name: "เจ็บจนพอ", artist: "WANYAi", category: "sad" },
        { name: "ถอย", artist: "GLISS", category: "sad" },
        { name: "ซ่อนกลิ่น", artist: "PALMY", category: "sad" },
        { name: "ภาพจำ", artist: "Pop Pongkool", category: "sad" },

        // เพลงอังกฤษ
        { name: "Until I Found You", artist: "Stephen Sanchez", category: "english" },
        { name: "Someone You Loved", artist: "Lewis Capaldi", category: "english" },
        { name: "Perfect", artist: "Ed Sheeran", category: "english" },
        { name: "Photograph", artist: "Ed Sheeran", category: "english" },
        { name: "All of Me", artist: "John Legend", category: "english" },
        { name: "Say You Won't Let Go", artist: "James Arthur", category: "english" },
        { name: "A Thousand Years", artist: "Christina Perri", category: "english" },
        { name: "Let Her Go", artist: "Passenger", category: "english" },
        { name: "Night Changes", artist: "One Direction", category: "english" },
        { name: "Dandelions", artist: "Ruth B.", category: "english" },

        // เพลงลูกทุ่ง
        { name: "ว่าว", artist: "มีนตรา อินทิรา", category: "lukthung" },
        { name: "ผู้สาวขาเลาะ", artist: "ลำไย ไหทองคำ", category: "lukthung" },
        { name: "อัปสราหลงฟ้า", artist: "หนุ่ม มีซอ", category: "lukthung" },
        { name: "สวยขยี้ใจ", artist: "บุ๊ค ศุภกฤต", category: "lukthung" },
        { name: "ฝนรินในเมืองหลวง", artist: "ไผ่ พงศธร", category: "lukthung" },
        { name: "ด้วยแรงแห่งรัก", artist: "ไมค์ ภิรมย์พร", category: "lukthung" },
        { name: "บุญผลา", artist: "ไมค์ ภิรมย์พร", category: "lukthung" },
        { name: "ไหง่ง่อง", artist: "ตั๊กแตน ชลดา", category: "lukthung" },
        { name: "สัญญาน้ำตาแม่", artist: "มนต์แคน แก่นคูน", category: "lukthung" },
        { name: "แม่ฮ้างมหาเสน่ห์", artist: "T Rex Tube", category: "lukthung" },

        // The Voice Thailand
        { name: "ฟ้า", artist: "นนท์ ธนนท์", category: "voice" },
        { name: "คิดมาก", artist: "The Voice Thailand", category: "voice" },
        { name: "นิยามรัก", artist: "The Voice Thailand", category: "voice" },
        { name: "นางฟ้า", artist: "The Voice Thailand", category: "voice" },
        { name: "Lately", artist: "The Voice Thailand", category: "voice" },
        { name: "นิโคติน", artist: "The Voice Thailand", category: "voice" },
        { name: "มีชีวิตเพื่อคนอื่น", artist: "The Voice Thailand", category: "voice" },
        { name: "ไม่มีใคร", artist: "The Voice Thailand", category: "voice" },
        { name: "วาดไว้", artist: "The Voice Thailand", category: "voice" },
        { name: "Don't You Worry 'Bout a Thing", artist: "The Voice Thailand", category: "voice" }
    ];

    const musicGrid = document.getElementById("musicGrid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const noResults = document.getElementById("noResults");
    const songCount = document.getElementById("songCount");

    const categoryNames = {
        love: "เพลงรัก",
        isan: "เพลงไทบ้าน",
        sad: "เพลงเศร้า",
        english: "เพลงอังกฤษ",
        lukthung: "เพลงลูกทุ่ง",
        voice: "The Voice Thailand"
    };

    if (!musicGrid) {
        console.error("ไม่พบ musicGrid ใน index.html");
        return;
    }

    function displaySongs(category = "all") {
        musicGrid.innerHTML = "";

        const filteredSongs = category === "all"
            ? songs
            : songs.filter(song => song.category === category);

        filteredSongs.forEach((song, index) => {
            const card = document.createElement("article");
            card.className = "music-card";

            const number = String(index + 1).padStart(2, "0");

            // แสดงการ์ดเพลง
            card.innerHTML = `
                <div class="music-cover">
                    <span class="music-number">${number}</span>
                    <span class="music-symbol">♫</span>
                </div>

                <div class="music-info">
                    <p class="music-category">${categoryNames[song.category]}</p>
                    <h3>${song.name}</h3>
                    <p class="music-artist">${song.artist}</p>

                    <button class="spotify-btn play-btn" type="button">
                        ▶ เปิดเครื่องเล่น Spotify
                    </button>

                    <div class="spotify-player" hidden>
                        <p class="player-note">
                            ค้นหาเพลงนี้บน Spotify
                        </p>
                        <iframe
                            title="Spotify ${song.name}"
                            src="https://open.spotify.com/embed/search/${encodeURIComponent(song.name + " " + song.artist)}"
                            width="100%"
                            height="152"
                            frameborder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            `;

            // ปุ่มเปิดและปิดเครื่องเล่น
            const playButton = card.querySelector(".play-btn");
            const player = card.querySelector(".spotify-player");

            playButton.addEventListener("click", function () {
                player.hidden = !player.hidden;

                playButton.textContent = player.hidden
                    ? "▶ เปิดเครื่องเล่น Spotify"
                    : "ปิดเครื่องเล่น";
            });

            musicGrid.appendChild(card);
        });

        if (songCount) {
            songCount.textContent =
                `แสดงเพลง ${filteredSongs.length} จาก ${songs.length} เพลง`;
        }

        if (noResults) {
            noResults.hidden = filteredSongs.length !== 0;
        }
    }

    // ระบบกรองหมวดเพลง
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            displaySongs(this.dataset.filter);
        });
    });

    // เริ่มต้นแสดงเพลงทั้งหมด
    displaySongs();

    console.log("MOOD MUSIC พร้อมใช้งาน จำนวน " + songs.length + " เพลง");
});
