  function Function() {
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        };





         const data = [
    { label: "فروردین", value: 65 },
    { label: "اردیبهشت", value: 90 },
    { label: "خرداد", value: 116 },
    { label: "تیر", value: 78 },
    { label: "مرداد", value: 148 },
    { label: "شهریور", value: 108 },
  ];

  const max = 160;
  const container = document.getElementById('bars');
  const labelsEL = document.getElementById('labels');

  data.forEach(item => {
    const col = document.createElement('div');
    col.className = 'bar-col';

    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = (item.value / max * 100) + '%';
    bar.title = item.value;


    col.appendChild(bar);
    container.appendChild(col);


    
    // const label = document.createElement('div');
    // label.className = 'label-col';
    // label.textContent = item.label;
    //  col.appendChild(label);
  });