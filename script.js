const sampleCount = 3;        // 你有 31 条数据
const select = document.getElementById("sampleSelect");

// 填充下拉菜单
for (let i = 1; i <= sampleCount; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.text = "Sample " + i;
    select.appendChild(opt);
}

function loadSample(id) {
    const base = `data/${id}`;

    // audio
    document.getElementById("audio-original").src = `${base}/x.wav`;
    document.getElementById("audio-kernel").src   = `${base}/kernel.wav`;
    document.getElementById("audio-pred").src     = `${base}/pred.wav`;

    // images
    document.getElementById("img-waveform").src = `${base}/waveform.png`;
    document.getElementById("img-kernel").src = `${base}/kernel.png`;
    document.getElementById("img-subtract").src = `${base}/subtract.png`;
}

// 初始加载
loadSample(1);

// 更换 sample
select.addEventListener("change", (evt) => {
    loadSample(evt.target.value);
});
