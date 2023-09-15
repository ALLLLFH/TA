$(document).ready(function() {
    $("#search-button").click(function() {
        var apiKey = "HjANQXhp7uRtFsNE5VTNiVwue6zCaqLh";
        var keyword = $("#keyword-input").val();
        if (keyword) {
            // Menggunakan AJAX untuk mencari GIF berdasarkan kata kunci
            $.ajax({
                url: "https://api.giphy.com/v1/gifs/search",
                method: "GET",
                dataType: "json",
                data: {
                    api_key: apiKey,
                    q: keyword,
                    limit: 10, // Jumlah maksimal GIF yang ditampilkan
                    rating: "g",
                    lang: "en",
                    bundle: "messaging_non_clips"
                },
                success: function(data) {
                    // Menampilkan hasil pencarian GIF ke dalam elemen-elemen HTML
                    $("#gif-list").empty();
                    if (data.data && data.data.length > 0) {
                        data.data.forEach(function(gif) {
                            var gifUrl = gif.images.fixed_height.url;
                            $("#gif-list").append("<img src='" + gifUrl + "' alt='GIF'>");
                        });
                    } else {
                        $("#gif-list").html("Tidak ada hasil untuk kata kunci tersebut.");
                    }
                },
                error: function() {
                    alert("Terjadi kesalahan dalam pencarian GIF.");
                }
            });
        } else {
            alert("Silakan masukkan kata kunci.");
        }
    });
});