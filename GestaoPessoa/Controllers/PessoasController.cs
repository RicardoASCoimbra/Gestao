using GestaoPessoa.Interfaces;
using GestaoPessoa.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GestaoPessoa.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        private IPessoasService _pessoaService;

        public PessoasController(IPessoasService pessoaService)
        {
            _pessoaService = pessoaService;
        }

        [HttpGet]
        [Route("GetAll")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IAsyncEnumerable<Pessoa>>> GetPessoas()
        {
            try
            {
                var pessoas = await _pessoaService.GetPessoas();
                return Ok(pessoas);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Erro ao obter o Cadastro de desta Pessoa");
            }
        }

        [HttpGet]
        [Route("GetPessoasByNome")]
        public async Task<ActionResult<IAsyncEnumerable<Pessoa>>> GetPessoasByNome([FromQuery] string nome)
        {
            try
            {
                var pessoas = await _pessoaService.GetPessoasByNome(nome);
                if (pessoas == null)
                    return NotFound($"Não existem cadastros com o criterio {nome}");

                return Ok(pessoas);
            }
            catch (Exception)
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpGet]
        [Route("{id:guid}")]
        public async Task<ActionResult<Pessoa>> GetPessoa(Guid id)
        {
            try
            {
                var pessoa = await _pessoaService.GetPessoa(id);
                if (pessoa == null)
                    return NotFound($"Não existe cadastro com o o id = {id}");

                return Ok(pessoa);
            }
            catch (Exception)
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpPost]
        [Route("CriarPessoas")]
        public async Task<IActionResult> Create([FromBody] Pessoa pessoa)
        {
            try
            {
                await _pessoaService.CreatePessoa(pessoa);
                return Ok($"Cadastro realizado com sucesso!");
            }
            catch (Exception)
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpPut]
        [Route("AlterarPessoa")]
        public async Task<ActionResult> Edit([FromBody] Pessoa pessoa)
        {
            try
            {
                await _pessoaService.UpdatePessoa(pessoa);
                return Ok($"Cadastro atualizado com sucesso!");

            }
            catch (Exception)
            {
                return BadRequest("Request inválido");
            }
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            try
            {
                var pessoa = await _pessoaService.GetPessoa(id);
                if (pessoa != null)
                {
                    await _pessoaService.Delete(id);
                    return Ok($"cadastro excluido com sucesso!");
                }
                else
                {
                    return NotFound($" Cadastro não enco0ntrado!");
                }

            }
            catch (Exception)
            {
                return BadRequest("Request inválido");
            }
        }


    }
}
