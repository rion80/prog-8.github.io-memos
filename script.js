const addBtn = document.getElementById("add")
//ボタンクリックしたら
addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  //メモ帳
  note.innerHTML = `
  <div class="tools">
  <div id ="days"></div>
  <button class="edit">保存</button>
  <button class="delete">削除</button>
  </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  
  `
  document.body.appendChild(note)

  const deleteBtn = note.querySelector('.delete')

  //削除
  deleteBtn.addEventListener('click', () => {
    deleteNote(note)
  })

}


function deleteNote(note) {
  note.remove()
}


