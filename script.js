Promise.all([
    fetch('components/search-bar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('search-bar-container').innerHTML = data;
        }),
    fetch('components/icon-column.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('icon-column-container').innerHTML = data;
        }),
    fetch('components/recycle-bin.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('recycle-bin-container').innerHTML = data;
        }),
    fetch('components/minesweeper.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('minesweeper-container').innerHTML = data;
        }),
]).then(() => {
    addEventListeners();
}).catch(error => console.error('Error loading components:', error));



// Logic to open a window by making it visible and animating it by adding and removing classes
console.log("Script.js loaded");
const trash = [];
function openWindow(windowElement) {
  windowElement.style.display = 'block';
  windowElement.classList.add('maximizing');
  windowElement.classList.remove('fade-out');
  windowElement.addEventListener('animationend', function handleMaximize() {
      windowElement.classList.remove('maximizing');
      windowElement.removeEventListener('animationend', handleMaximize);
  });
}

// Slightly more work for the closing animation, as we have to move the windows below the closing window, and prevent minesweeper and the recycle bin from being added to the trash
function closeWindow(windowElement) {
  const allWindows = Array.from(document.querySelectorAll('.window'));
  const closingIndex = allWindows.indexOf(windowElement);
  const closingWindowHeight = windowElement.offsetHeight;

  windowElement.classList.add('fade-out');

  allWindows.slice(closingIndex + 1).forEach(win => {
      win.style.transform = `translateY(-${closingWindowHeight}px)`;
      win.classList.add('slide-up');
  });

  windowElement.addEventListener('animationend', function handleFadeOut() {
      windowElement.style.display = 'none';
      windowElement.classList.remove('fade-out');
      windowElement.removeEventListener('animationend', handleFadeOut);

      allWindows.slice(closingIndex + 1).forEach(win => {
          win.classList.remove('slide-up');
          win.style.transform = '';
      });

      if (!windowElement.classList.contains('recycle-window') && !windowElement.classList.contains('minesweeper-window')) {
          const title = windowElement.querySelector('.title-bar .title').innerText;
          trash.push({ element: windowElement, title });
          updateTrashList();
          updateRecycleBinIcon();
      }
  });
}



// Add event listeners to the minimize button




function addEventListeners() {
    // Open the recycle bin window when the icon is clicked
    const recycleBin = document.getElementById('recycle-bin');
    if (recycleBin) {
        recycleBin.addEventListener('click', () => {
            const trashWindow = document.getElementById('recycle-window-id');
            if (trashWindow.style.display === 'none' || trashWindow.style.display === '') {
                openWindow(trashWindow);
            } else {
                closeWindow(trashWindow);
            }
        });
    }

    // Open the minesweeper window when the icon is clicked
    const minesweeper = document.getElementById('minesweeper');
    if (minesweeper) {
        minesweeper.addEventListener('click', () => {
            const minesweeperWindow = document.getElementById('minesweeper-window-id');
            if (minesweeperWindow.style.display === 'none' || minesweeperWindow.style.display === '') {
                openWindow(minesweeperWindow);
            } else {
                closeWindow(minesweeperWindow);
            }
        });
    }

    // Add event listeners to the close button
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', function () {
            const windowElement = this.closest('.window, .recycle-window');
            closeWindow(windowElement);
        });
    });

    document.querySelectorAll('.minimize').forEach(button => {
        button.addEventListener('click', function () {
            const windowElement = this.closest('.window');
            const contentElement = windowElement.querySelector('.content');
            if (windowElement && contentElement && !windowElement.classList.contains('minimized')) {
                contentElement.classList.add('minimizing');
                contentElement.addEventListener('animationend', function handleMinimize() {
                    windowElement.classList.add('minimized');
                    contentElement.classList.remove('minimizing');
                    contentElement.style.display = 'none';
                    contentElement.removeEventListener('animationend', handleMinimize);
                });
            }
        });
      });

      // Add event listeners to the maximize button
    document.querySelectorAll('.maximize').forEach(button => {
        button.addEventListener('click', function () {
            const windowElement = this.closest('.window');
            const contentElement = windowElement.querySelector('.content');
            if (windowElement && contentElement && windowElement.classList.contains('minimized')) {
                windowElement.classList.remove('minimized');
                contentElement.style.display = '';
                windowElement.classList.add('maximizing');
                windowElement.addEventListener('animationend', function handleMaximize() {
                    windowElement.classList.remove('maximizing');
                    windowElement.removeEventListener('animationend', handleMaximize);
                });
            }
        });
    });

    // Play a sound effect on the button click
    document.getElementById('sound-button').addEventListener('click', () => {
        const audio = new Audio('sounds/startup_sound.mp3');
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    });
}





function handleProjectWindow(projectId, windowId) {
    const projectElement = document.getElementById(projectId);
    const projectWindow = document.getElementById(windowId);
    console.log(projectElement, projectWindow);
    projectElement.addEventListener('click', () => {
        if (projectWindow.style.display === 'none' || projectWindow.style.display === '') {
            // Check if the window is in the trash list
            const trashIndex = trash.findIndex(item => item.element.id === windowId);
            if (trashIndex !== -1) {
                // Restore the window from the trash list
                restorePost(trashIndex);
            } else {
                // Open the window normally
                openWindow(projectWindow);
            }
        } else {
            closeWindow(projectWindow);
        }
    });
}

if (document.getElementById('c-project')) {
    handleProjectWindow('c-project', 'c-project-window-id');
    handleProjectWindow('c-sharp-project', 'c-sharp-project-window-id');
    handleProjectWindow('c-plus-plus-project', 'c-plus-plus-project-window-id');
    handleProjectWindow('html5-project', 'html5-project-window-id');
    handleProjectWindow('javascript-project', 'javascript-project-window-id');
    handleProjectWindow('css3-project', 'css3-project-window-id');
    handleProjectWindow('sql-project', 'sql-project-window-id');
    handleProjectWindow('java-project', 'java-project-window-id');
    handleProjectWindow('python-project', 'python-project-window-id');
    handleProjectWindow('spring-boot-project', 'spring-boot-project-window-id');
    handleProjectWindow('android-project', 'android-project-window-id');
} else {
    handleProjectWindow('vnds-project', 'vnds-project-window-id');
    handleProjectWindow('clannad-project', 'clannad-project-window-id');
    handleProjectWindow('renpy-project', 'renpy-project-window-id');
    handleProjectWindow('pokemon-project', 'pokemon-project-window-id');
    handleProjectWindow('pre-programming-project', 'pre-programming-project-window-id')
    handleProjectWindow('templates-project', 'templates-project-window-id')
    handleProjectWindow('threes-company-project', 'threes-company-project-window-id')
}


// Add/remove classes to the recycle bin window when they're deleted/restored

function updateTrashList() {
    const trashList = document.getElementById('recycle-list');
    trashList.innerHTML = '';
    
    if (trash.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'No items in recycle bin';
        trashList.appendChild(listItem);
    } else {
        trash.forEach((item, index) => {
            const listItem = document.createElement('li');
            const icon = document.createElement('img');
            icon.src = 'images/icons/text_file.png';
            icon.alt = 'Restore Post';
            icon.title = `Restore "${item.title}"`;
            icon.addEventListener('click', () => restorePost(index));
            const titleText = document.createTextNode(item.title);
            listItem.appendChild(icon);
            listItem.appendChild(titleText);
            trashList.appendChild(listItem);
        });
    }

    
}

// Add windows back to the dom and remove them from the trash
function restorePost(index) {
    const restoredItem = trash.splice(index, 1)[0];
    document.body.appendChild(restoredItem.element);
    restoredItem.element.style.display = 'block';
    restoredItem.element.style.margin = '50px auto';
    restoredItem.element.classList.add('maximizing');
    restoredItem.element.addEventListener('animationend', function handleMaximize() {
        restoredItem.element.classList.remove('maximizing');
        restoredItem.element.removeEventListener('animationend', handleMaximize);
    });
    updateTrashList();
    updateRecycleBinIcon();
}

// Simply change the icon, just like you'd see on a real computer if there are flies in the recycle bin
function updateRecycleBinIcon() {
    const recycleBinIcon = document.getElementById('recycle-bin-icon');
    if (trash.length > 0) {
        recycleBinIcon.src = 'images/icons/recycle_bin_full.png';
    } else {
        recycleBinIcon.src = 'images/icons/recycle_bin_empty.png';
    }
}



// Function to navigate to the selected page
function navigateToPage() {
  const select = document.getElementById('page-select');
  const value = select.value;
  if (value) {
      window.location.href = value;
  }
}