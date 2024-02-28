//  display data
const displayData = (data) => {

  const dataArray = data.data.tools;
  const cardContainer = document.getElementById("cardContainer");
  
  dataArray.forEach((items) => {
    const div = document.createElement("div");
    div.classList = "card bg-base-100 shadow-xl p-4 border border-2 boder-[#CFCFCF] h-[600px] w-full";
    div.innerHTML = `<figure class="px-8 py-8 bg-[#100F0F0D]">
        <img src="${items.image}" alt="server down, please wait......"/>
    </figure>
    <div class="card-body">
        <h2 class="card-title text-2xl font-semibold">${items.name}</h2>
        <ul class="text-base font-normal list-decimal px-5">
            <li>${items.features[0]}</li>
            <li>${items.features[1]}</li>
            ${(items.features[2] === undefined) ? "" : `<li>${items.features[2]}</li>`}
            ${(items.features[3] === undefined) ? "" : `<li>${items.features[3]}</li>`}
            ${(items.features[4] === undefined) ? "" : `<li>${items.features[4]}</li>`}
        </ul>
        <hr>
        <h2 class="card-title text-2xl font-semibold">Features</h2>
        <div class="flex justify-between items-center">
            <div class="flex gap-2">
                <img src="./assets/images/dateIcon.svg" alt="">
                <p class="text-base font-medium">${items.published_in}</p>
            </div>
            <a class="cursor-pointer"><img src="./assets/images/arrow.svg" alt=""></a>
        </div>
    </div>`;
    cardContainer.appendChild(div);
  });
  loadingSpinnerToggle(false);
};


loadingSpinnerToggle(true);
loadData()