package br.com.codinomelivros.dto;

import br.com.codinomelivros.enums.LiteraryGenreEnum;

import java.io.Serializable;
import java.util.Set;

public class GenreDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private String literaryGenreEnum;

    public GenreDTO(LiteraryGenreEnum literaryGenreEnum) {
        this.literaryGenreEnum = literaryGenreEnum.getName();
    }

    public String getLiteraryGenreEnum() {
        return literaryGenreEnum;
    }

    public void setLiteraryGenreEnum(String literaryGenreEnum) {
        this.literaryGenreEnum = literaryGenreEnum;
    }
}
