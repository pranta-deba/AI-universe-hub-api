//  display data
const displayData = (data) => {
  const cardContainer = document.getElementById("cardContainer");
  data.forEach((items) => {
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
            <a onclick="detailsHandler('${items.id}')" class="cursor-pointer"><img src="./assets/images/arrow.svg" alt=""></a>
        </div>
    </div>`;
    cardContainer.appendChild(div);
  });
  loadingSpinnerToggle(false);
  seeAllContainerToggle(true);
};

// display Details 
const displayDetails = (details) => {
    const detailsModalContainer = document.querySelectorAll('.detailsModalContainer');
    // detailsModalContainer[0].textContent = details?.description || "";
    // detailsModalContainer[1].textContent = details?.pricing[0]?.price || "";
    // detailsModalContainer[2].textContent = details?.pricing[0]?.plan || "";
    // detailsModalContainer[3].textContent = details?.pricing[1]?.price || "";
    // detailsModalContainer[4].textContent = details?.pricing[1]?.plan || "";
    // detailsModalContainer[5].textContent = details?.pricing[2]?.price || "";
    // detailsModalContainer[6].textContent = details?.pricing[2]?.plan || "";
    // detailsModalContainer[7].textContent = details?.features['1']?.feature_name || "";
    // detailsModalContainer[8].textContent = details?.features['2']?.feature_name || "";
    // detailsModalContainer[9].textContent = details?.features['3']?.feature_name || "";
    // detailsModalContainer[10].textContent = (details?.use_cases[0]?.name === null) ? "" : details?.use_cases[0]?.name;
    // detailsModalContainer[11].textContent = (details?.use_cases[1]?.name === null) ? "" : details?.use_cases[0]?.name;
    // detailsModalContainer[12].textContent = (details?.use_cases[2]?.name === null) ? "" : details?.use_cases[0]?.name;
    // detailsModalContainer[13].src = details?.image_link[0];
    // detailsModalContainer[14].textContent = details.accuracy?.score || "0";
    // console.log(details?.pricing[0].plan);



    my_modal_4.showModal();
};

 

// call loading spinner and load data to display
loadingSpinnerToggle(true);
loadData()