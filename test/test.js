//test.js
(async () => {
    const { default: chai } = await import('chai');
    const { default: chaiHttp } = await import('chai-http');
  
    chai.use(chaiHttp);
  
    describe('Card', () => {
      it('should return all data', async () => {
        const { default: server } = await import('../server.js');
        const res = await chai.request(server)
          .get('/api/cards');
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.be.an('object');
        chai.expect(res.body.data).to.be.an('array');
      });
  
      it('should add a new card', async () => {
        const { default: server } = await import('../server.js');
        const res = await chai.request(server)
          .post('/api/cards')
          .send({
            title: "Test Card",
            image: "https://example.com/image.jpg",
            link: "https://example.com",
            description: "This is a test card"
          });
        chai.expect(res).to.have.status(201);
      });
  
      it('should delete a card', async () => {
        const { default: server } = await import('../server.js');
        const getRes = await chai.request(server)
          .get('/api/cards');
        const cardId = getRes.body.data[0]._id; // Assuming at least one card exists
        const deleteRes = await chai.request(server)
          .delete(`/api/cards/${cardId}`);
        chai.expect(deleteRes).to.have.status(200);
      });
    });
  })();