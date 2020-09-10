import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(process.env.FIREBASE_CONFIG)
}

export default class FirebaseOperation {
  constructor() {
    this.db = firebase.firestore()
  }

  authCheck() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user)
        } else {
          resolve(null)
        }
      })
    })
  }

  /**
   * サインイン。Googleサイトのログイン画面へ
   */
  signInWithRedirect() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  /**
   * サインアウト
   */
  signOut() {
    firebase.auth().signOut()
  }

  loadEditBoard(uid) {
    return new Promise((resolve, reject) => {
      this.db
        .collection('tiles/edit/list')
        .doc(uid)
        .get()
        .then(doc => {
          if (doc.exists) {
            resolve(doc.data())
          } else {
            resolve(null)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  /**
   * uidから
   */
  loadEditList(uid) {
    return new Promise((resolve, reject) => {
      this.db
        .collection('tiles/edit/list')
        .doc(uid)
        .get()
        .then(doc => {
          if (doc.exists) {
            resolve(doc.data())
          } else {
            resolve(null)
          }
        })
        .catch(error => {
          console.error(error)
          reject(error)
        })
    })
  }

  loadEditListAll() {
    const array = []
    return new Promise((resolve, reject) => {
      this.db
        .collection('tiles/edit/list')
        .where('isRelease', '==', true)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            array.push(doc.data())
          })
          resolve(array)
        })
    })
  }

  setEditList(uid, tiles, suggest, isRelease) {
    return new Promise((resolve, reject) => {
      this.db
        .collection('tiles/edit/list')
        .doc(uid)
        .set({
          id: uid,
          tiles: tiles,
          suggest: suggest,
          isRelease: isRelease
        })
        .then(() => {
          resolve()
        })
    })
  }
}
