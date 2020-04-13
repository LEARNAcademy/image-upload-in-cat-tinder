import React from "react"
import ActiveStorageProvider from 'react-activestorage-provider'
class CatUpdate extends React.Component {
  constructor(props){
    super(props)
    const id = parseInt(props.match.params.id)
    const cat  = props.cats.find(cat => cat.id === id )
    this.state = {
      cat
    }
  }

  handleSubmit = (cat)=>{
    this.setState({ cat })
  }

  render () {
    const{ cat } = this.state
    return (
      <React.Fragment>
        {cat &&
          <div>
            <h1>Cat: {cat.name} </h1>
            { cat && cat.avatar_url &&
              <div>
                <h2>The Avatar is: </h2>
                <img src={cat.avatar_url} />
              </div>
            }
            <ActiveStorageProvider
              endpoint={{
                path: `/cats/${cat.id}`,
                host: 'localhost:3000',
                protocol: 'http',
                model: 'Cat',
                attribute: 'avatar',
                method: 'PUT',
              }}
              onSubmit={this.handleSubmit}
              render={({ handleUpload, uploads, ready }) => (
                <div>
                  <input
                    type="file"
                    disabled={!ready}
                    onChange={e => handleUpload(e.currentTarget.files)}
                  />

                  {uploads.map(upload => {
                    switch (upload.state) {
                      case 'waiting':
                        return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                      case 'uploading':
                        return (
                          <p key={upload.id}>
                            Uploading {upload.file.name}: {upload.progress}%
                          </p>
                        )
                      case 'error':
                        return (
                          <p key={upload.id}>
                            Error uploading {upload.file.name}: {upload.error}
                          </p>
                        )
                      case 'finished':
                        return (
                          <p key={upload.id}>Finished uploading {upload.file.name}</p>
                        )
                    }
                  })}
                </div>
              )}
            />
          </div>
        }
      </React.Fragment>
    );
  }
}

export default CatUpdate
