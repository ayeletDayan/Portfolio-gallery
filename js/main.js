console.log('Starting up');

var gPortfolio = [];

function _creatPortfolio() {
    gPortfolio.push(_creatPorject('Bookshop', 'img/portfolio/books.jpg', 'Online bookstore: You can sort by price or title, you can update prices, you can add or delete books.', 'https://ayeletdayan.github.io/Bookshop/', 'Shopping', 'October 2021'));
    gPortfolio.push(_creatPorject('MineSweeper', 'img/portfolio/MineSweeper.jpg', 'Play...', 'https://ayeletdayan.github.io/mineSweeper/', 'Games', 'October 2021'));
    gPortfolio.push(_creatPorject('Game of Live', 'img/portfolio/gameOfLive.jpg', 'Play...', 'https://ayeletdayan.github.io/gameOfLife/', 'Games', 'October 2021'));
    gPortfolio.push(_creatPorject('Touch the Numbers', 'img/portfolio/touchNums.jpg', 'Play...', 'https://ayeletdayan.github.io/Touch-the-Numbers/', 'Games', 'September 2021'));
    gPortfolio.push(_creatPorject('Bingo', 'img/portfolio/Bingo.jpg', 'Play...', 'https://ayeletdayan.github.io/Bingo/', 'Games', 'September 2021'));
    gPortfolio.push(_creatPorject('Login', 'img/portfolio/Login.jpg', 'User management...', 'https://ayeletdayan.github.io/Login/', 'User management', 'October 2021'));
    gPortfolio.push(_creatPorject('In The Picture', 'img/portfolio/InThePic.jpg', 'Play...', 'https://ayeletdayan.github.io/InThePicture/', 'Games', 'September 2021'));
    gPortfolio.push(_creatPorject('Collect the Balls', 'img/portfolio/CollectBalls.jpg', 'Play...', 'https://ayeletdayan.github.io/Collect-the-Balls/', 'Games', 'September 2021'));
    gPortfolio.push(_creatPorject('Chess', 'img/portfolio/chess.jpg', 'Play...', 'https://ayeletdayan.github.io/Chess/', 'Games', 'September 2021'));
    gPortfolio.push(_creatPorject('Pacman', 'img/portfolio/pacman.jpg', 'Play...', 'https://ayeletdayan.github.io/Pacman/', 'Games', 'September 2021'));    
    gPortfolio.push(_creatPorject('Todo', 'img/portfolio/todo.jpg', 'Task management...', 'https://ayeletdayan.github.io/Todo/', 'Task management', 'October 2021'));
    gPortfolio.push(_creatPorject('Site Data', 'img/portfolio/SitaData.jpg', 'Information on an archeological site, including historical and archeological background, information from excavations, excavation reports ...', 'In preparation', 'Data', 'October 2021')); //insert link
    gPortfolio.push(_creatPorject('Guess who?', 'img/portfolio/guess.jpg', 'play...', 'https://ayeletdayan.github.io/Guess-me/', 'Games', 'October 2021'));
    return gPortfolio;
}

function _creatPorject(name, img, description, link, category, date) {
    var project = {
        id: makeId(),
        name,
        img,
        description,
        link,
        category,
        date,
        client: 'coding - academy'
    }
    return project;
}

function renderPortfolio() {
    _creatPortfolio()
    $('.myPortfolio').html(getPortfolio());    
}

function getPortfolio() {
    var strHtmls = gPortfolio.map((project) => {
        return `<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="getModal('${project.id}')"><div class="portfolio-hover"><div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div><div style="height: 350px; max-width: 350px;" ><img style="height: 100%; width: 100%; object-fit: cover;" class="img-fluid" src="${project.img}" alt=""></div></a><div class="portfolio-caption"><h4>${project.name}</h4><p class="text-muted">${project.category}</p></div></div>`
    })
    return strHtmls.join('');
}

function getProjectById(idx){
   var currProject = gPortfolio.find((project) => project.id === idx);
   return currProject;    
}

function getModal(idx) {
    var currProject = getProjectById(idx);
    console.log(currProject)
    var strHtmls = `<h2>${currProject.name}</h2><img class="img-fluid d-block mx-auto" src="${currProject.img}" alt=""><p>${currProject.description}.</p><a style="font-size: large;" href="${currProject.link}">To the project</a><ul class="list-inline"><li>Date: ${currProject.date}</li><li>Client: coding-academy</li><li>Category: ${currProject.category}</li>`
    
    $('.modal-body').html(strHtmls);
}

function makeId(length = 4) {
    var txt = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function submitMail(){
    var SUBJECT = $('.form-control-subject').value;
    var BODY = $('.form-control-body').value;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ayeletgeri@yahoo.com&su=${SUBJECT}&body=${BODY}`);
}