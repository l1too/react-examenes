export const calcularPromedios = (usuarios) => {
    return usuarios.map(usuario => {
      const totalPuntajes = usuario.examenes.reduce((total, examen) => total + examen.puntaje, 0);
      const promedio = totalPuntajes / usuario.examenes.length;
      return { ...usuario, promedio };
    });
    console.log(usuarios);
  };